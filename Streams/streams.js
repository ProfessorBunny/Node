const { createReadStream } = require("fs");
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
const stream = createReadStream("../content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});
// const stream = createReadStream('./content/big.txt')

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => console.log(err));
