const {MongoClient} = require("mongodb");
const fs = require('fs').promises;

// convert users.csv file to JSON array
const main = async () => {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
    const client = new MongoClient(uri);

    await client.connect();
    const database = client.db('babel');
    const wineCol = database.collection('wines');


    const fileContent = await fs.readFile('./data.csv');

    const fileContentStr = String(fileContent);

    const data = fileContentStr
        // each wine is on a new line
        .split('\n')

        // remove blank line
        .filter((line) => !!line.trim())


        // map string split by `;` to document
        .map((line, i) => {
            // escape first line
            if (!i) {
                return null;
            }
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
            const [couleur, cuvee, domaine, region, pays, millesime, cepage, vigneron, prix, quantite] = line.split(';')
            return {
                couleur,
                domaine,
                cuvee,
                region,
                pays,
                millesime,
                cepage,
                vigneron,
                prix,
                quantite
            };
        })
        // remove NULL document (first line of the doc)
        .filter(Boolean);
    await wineCol.insertMany(data);
    console.log('done');
    process.exit(0);
}
main();

