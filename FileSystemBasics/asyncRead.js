let fs = require('fs');
const filename = "todo.txt";

console.log(`Entire content of ${filename} will be read syncronously.`);

fs.readFile(filename, {encoding: "utf8"}, (err, data) => {
    if(err) {
        console.error(err.message);
    } else {
        console.log(`Reading ${filename} finished successfully.`);
        console.log(`Content of ${filename}:`);
        console.log(data);
    }
});

console.log(`Meanwhile Node.js app couldn´t do anything else.
...`)