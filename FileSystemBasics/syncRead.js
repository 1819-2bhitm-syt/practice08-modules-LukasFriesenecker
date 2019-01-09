let fs = require('fs');
const filename = "todo.txt";

console.log(`Entire content of ${filename} will be read syncronously.`);

let content = fs.readFileSync(filename, {encoding: "utf8"});

console.log(`Reading ${filename} finished successfully.`);
console.log(`Meanwhile Node.js app couldn´t do anything else.
`)
console.log(`Content of ${filename}:
${content}`);