const { readFile } = require("fs").promises;

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
        console.log(result);
      }
    });
  });
};
getText("./content/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
