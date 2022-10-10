const factorial = require("../factorial/index");

const ratio = require("../ratio/index");

function fact(num1, num2, num3) {
  rat_fact = {};
  ratio1 = ratio(num1, num2);
  fact1 = factorial(num3);
  rat_fact[ratio] = ratio1;
  rat_fact[factorial] = fact1;
  return rat_fact;
}

module.exports = fact();
