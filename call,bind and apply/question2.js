// What is apply?

var obj = { name: "Veshal"}

function sayHello(age,profession) {
    return "Hello, " + this.name + " is "+age+ " and is a "+ profession + "!";
}

console.log(sayHello.apply(obj, [22, "Software Engineer"]))