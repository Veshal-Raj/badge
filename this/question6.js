// What is the output?

const user = {
    name: 'Veshal',
    greet() {
        return `Hello, ${this.name}!`; // this will focus on the user object
    },
    farewell: () => {
        return `Goodbye, ${this.name}!` // this will focus on the window object, because it is an arrow function
    }
}

console.log(user.greet()) // Hello, Veshal!
console.log(user.farewell()) // Hello, undefined! 