const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const router = express.Router();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);

router.get("/", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("babel");
    const wineCol = database.collection("wines");

    const wines = await wineCol.find().toArray();
    res.send(wines);
  } finally {
    await client.close();
  }
});

router.get("/:id", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("babel");
    const wineCol = database.collection("wines");
    const query = { _id: new ObjectId(req.params.id) };
    const wine = await wineCol.findOne(query);
    res.send(wine);
  } finally {
    await client.close();
  }
});

router.post("/", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("babel");
    const wineCol = database.collection("wines");

    // create a document to insert
    const doc = {
      cuvee: req.body.cuvee,
      domaine: req.body.domaine,
      cepage: req.body.cepage,
      millesime: req.body.millesime,
      description: req.body.descritpion,
      vigneron: req.body.vigneron,
      couleur: req.body.couleur,
      departement: req.body.departement,
      region: req.body.region,
      quantite: req.body.quantite,
      prix: req.body.prix,

    };

    const result = await wineCol.insertOne(doc);
    res.send(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
});

router.get("/color/:color", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("babel");
    const wineCol = database.collection("wines");
    const query = { color: req.params.color };
    const wine = await wineCol.find(query).toArray();
    res.send(wine);
    console.log(wine);
  } finally {
    await client.close();
  }
});

router.get("/search/:name", async (req, res) => {
  try {
    await client.connect();
    const q = req.params.name
    const database = client.db("babel");
    const wineCol = database.collection("wines");
    const wine =  await wineCol.find({ name: {$regex : new RegExp(q)}}).toArray();
    res.send(wine);
    console.log(q);
    console.log(wine);

  } finally {
    await client.close();
  }
});

router.get("/domain/:domain", async (req, res) => {
  try {
    await client.connect();
    const q = req.params.domain
    const database = client.db("babel");
    const wineCol = database.collection("wines");
    const wine =  await wineCol.find({ domain: {$regex : new RegExp(q)}}).toArray();
    res.send(wine);
    console.log(wine);
  } finally {
    await client.close();
  }
});

router.get("/wines/:color", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("babel");
    const wineCol = database.collection("wines");

    const query = { color: req.params.color };
    const wine = await wineCol.find(query).toArray();
    res.send(wine);
    console.log(wine);
  } finally {
    await client.close();
  }
});

router.get("/dpt/:dpt", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("babel");
    const wineCol = database.collection("wines");

    const query = { dpt: req.params.dpt };
    const wine = await wineCol.find(query).toArray();
    res.send(wine);
    console.log(wine);
  } finally {
    await client.close();
  }
});

router.put("/:id", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("babel");
    const wineCol = database.collection("wines");
    await wineCol.updateOne(
      { _id: new ObjectId(req.params.id) },
      {
        $set: 
          req.body
      }
    );
    res.send("Wine updated");
  } finally {
    await client.close();
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("babel");
    const wineCol = database.collection("wines");

    const query = { _id: new ObjectId(req.params.id) };
    await wineCol.deleteOne(query);
    res.send("Successfully deleted!");
  } finally {
    await client.close();
  }
});

module.exports = router;
