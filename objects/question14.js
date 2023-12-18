// What is the output?

console.log({a: 1} == {a: 1}) // false
console.log({a: 1} === {a: 1}) // false

// Javascript will always compares two objects with the reference,
// not by value, so it will always give false. 

console.log(["a"] == ["a"]) // false
console.log(["a"] === ["a"]) // false