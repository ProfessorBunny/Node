const path = require("path");

console.log(path.sep);

//Joining the path
const filePath = path.join("./content/", "subfolder", "test.txt");
console.log(filePath);

//Base Name for a file
const base = path.basename(filePath);
console.log(base);

//Absolute Path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
