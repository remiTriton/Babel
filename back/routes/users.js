const express = require('express');
const { MongoClient, ObjectId } = require('mongodb')
const bcrypt = require('bcryptjs')

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
            res.send('Please fill all fields.');
        } else {
            bcrypt.genSalt(10, (err, salt) => bcrypt.hash(doc.password, salt, (err, hash) => {
                if (err) throw err;
                //password secured
                doc.password = hash;
            }));
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