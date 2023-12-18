// what is the output?

let person = { name: 'Lydia'};
const members = [person]
person = null;

console.log(members) // [ { name: 'Lydia' } ]
