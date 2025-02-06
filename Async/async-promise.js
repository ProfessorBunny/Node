const { readFile } = require("fs").promises;

const getText = (path) => {
  console.log("result");
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, result) => {
      if (err) {
        reject(err);
        console.log("result");
      } else {
        resolve(result);
        console.log("result");
      }
    });
  });
};
getText("../content/first.txt")
  .then((result) => console.log(`result: ${result}`))
  .catch((err) => console.log(err));
