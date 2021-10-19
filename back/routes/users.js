const express = require('express');
const { MongoClient, ObjectId } = require('mongodb')

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
        const userCol = database.collection("users");

        // create a document to insert
        const doc = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        }

        const result = await userCol.insertOne(doc);
        res.send(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
});

module.exports = router;