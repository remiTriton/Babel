const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const router = express.Router();
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);


router.get("/", async (req, res) => {
    try {
        await client.connect();
        const database = client.db("babel");
        const orderCol = database.collection("orders");
        const orders = await orderCol.find().toArray();
        res.send(orders);
    } finally {
        await client.close();
    }
});

router.post("/", async (req, res) => {
    try {
        await client.connect();
        const database = client.db("babel");
        const orderCol = database.collection("orders");
        const wineCol = database.collection('wines');
        if (req.body.id) {
            const id = req.body.id;
            const product = await wineCol.findOne(new ObjectId(id));
            // create a document to insert
            const doc = {
                userEmail: req.body.email,
                wines:
                    [{
                        id: product._id,
                        cuvee: product.cuvee,
                        quantite: req.body.quantite,
                    }],
            };
            const result = await orderCol.insertOne(doc);
            res.send(result);
        } else {
            const doc = {
                userEmail: req.body.email,
            };
            const result = await orderCol.insertOne(doc);
            res.send(result);
        }

    } finally {
        await client.close();
    }
});

router.get("/:id", async (req, res) => {
    try {
        await client.connect();
        const database = client.db("babel");
        const orderCol = database.collection("orders");
        const query = { _id: new ObjectId(req.params.id) };
        const order = await orderCol.findOne(query);
        res.send(order);
    } finally {
        await client.close();
    }
});

// GET / PUT / POST / DELETE
router.put("/:id", async (req, res) => {
    try {
        await client.connect();
        const database = client.db("babel");
        const orderCol = database.collection("orders");
        const wineCol = database.collection('wines');
        const id = req.body.id;
        const product = await wineCol.findOne(new ObjectId(id));
        await orderCol.updateOne(
            { _id: new ObjectId(req.params.id) },
            {
                $push: {
                    wines:
                    {
                        wineId: product._id,
                        cuvee: product.cuvee,
                        couleur: product.couleur,
                        quantite: req.body.quantite,
                    }
                }
            }
        );
        res.send("Order updated");
    } finally {
        await client.close();
    }
});

router.put("/confirm/:id", async (req, res) => {
    try {
        await client.connect();
        const database = client.db("babel");
        const orderCol = database.collection("orders");
        const result = await orderCol.updateOne(
            { _id: new ObjectId(req.params.id), "wines.cuvee": req.body.cuvee, "wines.couleur": req.body.couleur },
            {
                $set: { "wines.$.quantite": req.body.quantite }

            }
        );
        res.send(result);
    } finally {
        await client.close();
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await client.connect();
        const database = client.db("babel");
        const orderCol = database.collection("orders");
        const query = { _id: new ObjectId(req.params.id) };
        await orderCol.deleteOne(query);
        res.send("Successfully deleted!");
    } finally {
        await client.close();
    }
});

router.put("/deleteOneWine/:id", async (req, res) => {
    try {
        await client.connect();
        const database = client.db("babel");
        const orderCol = database.collection("orders");
        const order = await orderCol.updateOne({

            _id: new ObjectId(req.params.id)
        },                            
                    { $pull: {wines : { wineId: ObjectId(req.body.wineId) }}},
                    {multi:true}
        );
        res.send(order)
    } finally {
        await client.close();
    }
});


module.exports = router;
