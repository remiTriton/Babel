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
        const id = req.body.id;
        const product = await wineCol.findOne(new ObjectId(id));
        // create a document to insert
        const doc = {
            userEmail : request.body.email,
            userId : request.body._id,
            wines:
                [{
                    id: product._id,
                    name: product.name,
                    quantity: req.body.quantity,
                }],
        };
        const result = await orderCol.insertOne(doc);
        res.send(`A document was inserted with the _id: ${result.insertedId}`);
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
                        id: product._id,
                        name: product.name,
                        quantity: req.body.quantity,
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
        await orderCol.updateOne(
            { _id: new ObjectId(req.params.id) },
            {
                $set:
                    req.body
            }
        );
        res.send("Order updated");
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

module.exports = router;
