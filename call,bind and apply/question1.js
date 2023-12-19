// What is call?

var obj = { name: "Veshal"}

function sayHello(age) {
    return "Hello, " + this.name + " is "+age+ "!";
}

console.log(sayHello.call(obj, 22))
// Hello, Veshal is 22 !