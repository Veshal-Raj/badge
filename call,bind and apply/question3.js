// What is Bind?

var obj = { name: "Veshal"}

function sayHello(age,profession) {
    return "Hello, " + this.name + " is "+age+ " and is a "+ profession + "!";
}

let bindFunc = sayHello.bind(obj);

console.log(bindFunc(24, "Software Engineer"))
console.log(bindFunc(34, "Traveller"))
console.log(bindFunc(12, "Dreamer"))
console.log(bindFunc(44, "Writer / Director"))