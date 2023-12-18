// Create an Object calculator

const readlineSync = require('readline-sync');

let calculator = {
  read() {
    this.a = parseFloat(readlineSync.question("a = ") || 0);
    this.b = parseFloat(readlineSync.question("b = ") || 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

