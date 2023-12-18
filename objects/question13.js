// What is the ouput?

let c = { greeting: 'Hey!'}
let d;

d= c;

c.greeting = "Hello";
console.log(d.greeting) // Hello

// here if we assign one object to another we are not copying the values, 
// we are just giving the reference of one to another.
 
