function multiply(...num) {
  return num.reduce((acc, cur) => acc * cur);
}

function sum(...num) {
  return num.reduce((acc, cur) => acc + cur);
}

module.exports = { sum, multiply };
