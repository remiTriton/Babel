const express = require('express');
const { MongoClient, ObjectId } = require('mongodb')

const router = express.Router();

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('babel');
    const wineCol = database.collection('wines');

    const wines = await wineCol.find().toArray();
    res.send(wines);
  } finally {
    await client.close();
  }
});

router.get('/:id', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('babel');
    const wineCol = database.collection('wines');

    const query = { _id: new ObjectId(req.params.id) };
    const wine = await wineCol.findOne(query);
    res.send(wine);
  } finally {
    await client.close();
  }
});

router.post('/', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('babel');
    const wineCol = database.collection("wines");

    // create a document to insert
    const doc = {
      domain: req.body.domain,
      winemaker: req.body.winemaker,
      grapeVariety: req.body.grapeVariety,
      year: req.body.year,
      technicalSpecification: req.body.technicalSpecification,
      wineName: req.body.wineName,
      color: req.body.color,
      city: req.body.city,
      state: req.body.state,
      quantity: req.body.quantity,

    }

    const result = await wineCol.insertOne(doc);
    res.send(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
});

router.get('/search/:name', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('babel');
    const wineCol = database.collection('wines');

    const query = {name: req.params.name };
    const wine = await wineCol.findOne(query);
    res.send(wine);
    console.log(wine)
  } finally {
    await client.close();
  }
})

router.get('/date/:year', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('babel');
    const wineCol = database.collection('wines');

    const query = {year: req.params.year };
    const wine =  await wineCol.find(query).toArray();
    res.send(wine);
    console.log(wine)
  } finally {
    await client.close();
  }
})

module.exports = router;
