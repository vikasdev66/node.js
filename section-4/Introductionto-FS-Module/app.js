// import fs from "node:fs";
import fs from "node:fs/promises";

// fs.readFileSync is prohibited because it is bloc the main thread
// const content = fs.readFileSync("./index.html", "utf-8");

// fs.readFile("./index.html", (error, data) => {
//   const content = data.toString();
//   console.log(content);
// });

// we will use node:fs/promises
const content = await fs.readFile("./index.html");
console.log(content.toString());
console.log("End");
