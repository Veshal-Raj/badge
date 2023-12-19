// Bind Chaining

function f() {
    console.log(this.name)
}

f = f.bind({ name: "John" }).bind({name: "Ann"})

console.log(f());
// John, undefined