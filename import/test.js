const CSVToJSON = require('csvtojson');
const fs = require('fs');

// convert users.csv file to JSON array
(async () => {
    try {
        const data = await CSVToJSON().fromFile('data.csv');

        // log the JSON array
        console.log(data);

        //write json files

        fs.writeFile('data.json', JSON.stringify(data, null, 4), (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON array is saved.");
        });

    } catch (err) {
        console.log(err);
    }

})();

