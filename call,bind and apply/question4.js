// Output Based Question

const person = { name: "Veshal" };

function sayHi(age) {
    return `${this.name} is ${age}`
}

console.log(sayHi.call(person, 22)) // Veshal is 22
console.log(sayHi.bind(person, 22)) //[Function: bound sayHi]

