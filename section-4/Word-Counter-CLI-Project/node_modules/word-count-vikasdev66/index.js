#!/usr/bin/env node

import fs from "node:fs/promises";
import { argv } from "node:process";

const content = await fs.readFile(process.argv[2], "utf-8");

const arr = content.split(/[\W]/).filter((word) => word);
const obj = {};
arr.forEach((item) => {
  var num = 0;
  if (obj[item.toLowerCase()]) {
    num = obj[item.toLowerCase()];
  }
  obj[item.toLowerCase()] = num + 1;
});

if (argv[3]) {
  if (argv[3] in obj) {
    console.log(argv[3], ":", obj[argv[3]]);
  } else {
    console.log(argv[3], ":", 0);
  }
} else {
  console.log(obj);
}
