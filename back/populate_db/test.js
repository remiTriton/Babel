const { MongoClient } = require("mongodb");
const fs = require('fs').promises;

// convert users.csv file to JSON array
const main = async () => {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
    const client = new MongoClient(uri);

    await client.connect();
    const database = client.db('babel');
    const wineCol = database.collection('wines');

    const fileContent = await fs.readFile('./import/data.csv');
    const fileContentStr = String(fileContent);
    const json = fileContentStr
        .split('\n')
        .filter((line) => !!line.trim())
        .map((line) => {
            const [id, domain, name, dpt, country, year, cepage, owner] = line.split(';')
            return {
                id,
                domain,
                name,
                dpt,
                country,
                year,
                cepage,
                owner,
            };
        });

    await wineCol.findById(id);
    if (id) {
        return;
    }

    await wineCol.insertMany(json);
    console.log(json)
}
main();

