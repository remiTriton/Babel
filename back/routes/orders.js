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


module.exports = router;

