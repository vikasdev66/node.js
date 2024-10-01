const { sum, multiply } = require("./math");
const fs = require("fs");

console.log("fs................", fs.readFileSync("./math.js").toString());
console.log("sum result", sum);
console.log("sum result", sum(1, 2, 3, 4));
console.log("multiply result", multiply(1, 2, 3, 4));
