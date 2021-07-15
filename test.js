import fs from "fs";

fs.readFile('./dataset.json', 'utf8', (err, data) => {

    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {

        // parse JSON string to JSON object
        const databases = JSON.parse(data);
        // print all databases
        console.log(databases);
    }
});