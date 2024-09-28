console.time();
for (let i = 0; i < 1000000000; i++) {
  if (i % 40000000 === 0) {
    console.log("task2: Running loop 2", i);
  }
}
console.timeEnd();
