// Using apply to enhance Built-in functions

// Find min/max number in an array.
const numbers = [2,3,4,5,6,7,72,4,5];

console.log(Math.max.apply(null, numbers)) // 72
console.log(Math.min.apply(null, numbers)) // 2