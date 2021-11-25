const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const router = express.Router();
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);
const database = client.db("babel");
const wineCol = database.collection("wines");

router.get("/", async (req, res) => {
  try {
    await client.connect();
    const wines = await wineCol.find().toArray();
    res.send(wines);
  } finally {
    await client.close();
  }
});

router.get("/:id", async (req, res) => {
  try {
    await client.connect();
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
    // create a document to insert
    const doc = {
      cuvee: req.body.cuvee,
      domaine: req.body.domaine,
      cepage: req.body.cepage,
      millesime: req.body.millesime,
      vigneron: req.body.vigneron,
      couleur: req.body.couleur,
      description: req.body.descritpion,
      region: req.body.region,
      pays: req.body.pays,
      quantite: req.body.quantite,
      prix: req.body.prix,
    };

    const result = await wineCol.insertOne(doc);
    res.send(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
});

router.get("/search/:cuvee", async (req, res) => {
  try {
    await client.connect();
    const q = req.params.cuvee
    const wine =  await wineCol.find({ cuvee: {$regex : new RegExp(q)}}).toArray();
    res.send(wine);
    console.log(q);
    console.log(wine);

  } finally {
    await client.close();
  }
});

router.get("/domain/:domaine", async (req, res) => {
  try {
    await client.connect();
    const q = req.params.domaine
    const wine =  await wineCol.find({ domaine: {$regex : new RegExp(q)}}).toArray();
    res.send(wine);
    console.log(wine);
  } finally {
    await client.close();
  }
});

router.get("/color/:couleur", async (req, res) => {
  try {
    await client.connect();
    const query = { couleur: req.params.couleur };
    const wine = await wineCol.find(query).toArray();
    res.send(wine);
    console.log(wine);
  } finally {
    await client.close();
  }
});

router.get("/region/:region", async (req, res) => {
  try {
    await client.connect();
    const q = req.params.region
    const query = { region:  {$regex : new RegExp(q)} };
    const wine = await wineCol.find(query).toArray();
    res.send(wine);
  } finally {
    await client.close();
  }
});
router.get("/pays/:pays", async (req, res) => {
  try {
    await client.connect();
    const q = req.params.pays
    const query = { pays:  {$regex : new RegExp(q)} };
    const wine = await wineCol.find(query).toArray();
    res.send(wine);
  } finally {
    await client.close();
  }
});

router.put("/:id", async (req, res) => {
  try {
    await client.connect();
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
    const query = { _id: new ObjectId(req.params.id) };
    await wineCol.deleteOne(query);
    res.send("Successfully deleted!");
  } finally {
    await client.close();
  }
});

module.exports = router;
