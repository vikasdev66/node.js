import { num } from "./math.js";
console.log(num);

//Accessing filename and dirname in ES6 Modules

const { filename, dirname } = import.meta; // import.meta can be accessed from within the module

console.log(filename);
console.log(dirname);
