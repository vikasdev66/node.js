import { writeFile } from "node:fs";
import fs from "node:fs/promises";

// fs.writeFile => Writes data to a file, replacing the file if it already exists.
//fs.writeFile("./file-1.txt", "Hello, I am Vikas Mishra");

//fs.appendFile => Appends data to the end of a file. If the file doesn’t exist, it creates a new one.
// fs.appendFile("./file-1.txt", "\nhow are you?");

//created a clock file
// setInterval(() => {
//   fs.writeFile(
//     "./clockfile.txt",
//     new Date().toLocaleTimeString("en-us", { hour12: true })
//   );
// }, 1000);


//created a error log file
try {
  const bufferContent = await fs.readFile("nodejs.png");
  fs.writeFile("node.png", bufferContent);
} catch (err) {
  fs.appendFile(
    "./error.log",
    `${new Date().toLocaleTimeString()} : ${err.message} \n    ${err.stack}\n\n`
  );

  console.log(error.message);
}
