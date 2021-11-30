const jwt = require('jsonwebtoken');
const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const router = express.Router();
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);
const database = client.db("babel");
const userCol = database.collection("users");
const sendEmail = require('../utils/sendEmail');
const bcrypt = require('bcryptjs')
const users = require('./users')


router.post("/", async (req, res) => {
    try {
        await client.connect();
        const user = await userCol.findOne({ email: req.body.email });
        if (!user)
            return res.status(400).send("This mail doesn't exists.");

        let bearerHeader = req.headers['authorization'];
        // Check if bearer is undefined
        if (typeof bearerHeader !== 'undefined') {
            // Split at the space
            const bearer = bearerHeader.split(' ');
            // Get token from array
            const bearerToken = bearer[1];
            // Set the token
            req.token = bearerToken;
            console.log("allo?")
            // Next middleware
        } else {
            const toke = jwt.sign({
                user: {
                    id: user._id,
                    email: user.email,
                    role: user.role,
                }, iat: Math.floor(Date.now() / 1000) + (60 * 60), expiresIn: 60 * 60 
            }, 'token', (err, token) => {
                res.status(200).json({
                    user: user, token: token
                });
                console.log(toke)

            });
        }
        const link = `http://localhost:3000/password-reset/${user._id}`;
        await sendEmail(user.email, "Password reset", "Bonjour, il semblerait que vous ayiez demandé une demande de nouveau mot de passe, Veuillez vous rendre à cette adresse :" + link );

    } catch (error) {
        res.send("oopsi");
        console.log(error)
    } finally {
        await client.close();
    }
});

router.post('/:userId/', users.verifyToken, async (req, res) => {
    try {
        await client.connect();
        const user = await userCol.findOne({ _id: new ObjectId(req.params.userId) });
        if (!user)
            return res.status(400).send('invalid link or expired');

        const hash = await new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err, salt) => bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) {
                    reject(err)
                    return;
                }
                resolve(hash)
                return;
            }))
        })
        await userCol.updateOne({ _id: new ObjectId(req.params.userId) },
            {
                $set: {
                    password: hash
                }
            });
        console.log(hash)
        res.status(200).send('password updatedt LUL')
    } finally {
        await client.close();
    }
});


module.exports = router;
