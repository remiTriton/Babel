const express = require('express');
const { MongoClient, ObjectId } = require('mongodb')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const router = express.Router();
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('babel');
        const userCol = database.collection('users');
        const users = await userCol.find().toArray();
        res.send(users);
    } finally {
        await client.close();
    }
});

router.get('/:id', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('babel');
        const userCol = database.collection('users');
        const query = { _id: new ObjectId(req.params.id) };
        const users = await userCol.findOne(query);
        res.send(users);
    } finally {
        await client.close();
    }
});

router.post('/', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('babel');
        const userCol = database.collection("users")
        // create a document to insert
        const doc = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        }

        if (!doc.firstname || !doc.lastname || !doc.email || !doc.password) {
            res.send('Please fill all fields')
        } else {
            const query = { email: doc.email };
            const user = await userCol.findOne(query);

            if (user) {
                res.status(500);
                res.send('existing email');
                return;
            }

            const hash = await new Promise((resolve, reject) => {
                bcrypt.genSalt(10, (err, salt) => bcrypt.hash(doc.password, salt, (err, hash) => {

                    if (err) {
                        reject(err)
                        return;
                    }

                    resolve(hash)
                    return;
                }))
            })

            //MDP securise
            doc.password = hash;

            const result = await userCol.insertOne(doc);

            res.send(JSON.stringify({
                id: result.insertedId
            }));
        }

    } finally {
        await client.close();
    }
});

module.exports = router;

//Login handler for

router.post('/login', async (req, res) => {
    await client.connect();
    const database = client.db('babel');
    const userCol = database.collection("users");

    const { email, password } = req.body
    // Match user
    userCol.findOne({
        email: email
    }).then(user => {
        if (!user) {
            return res.status(200).json('No user found')
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                jwt.sign({ user, iat: Math.floor(Date.now() / 1000) + (60 * 60), }, 'token', (err, token) => {
                    res.status(200).json({
                        user,
                        token
                    });
                });
            } else {
                return res.status(200).json('Wrong password')
            }
        })
    })
})
