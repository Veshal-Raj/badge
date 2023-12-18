// What is the output?

const value = { number : 10 };

const multiply = (x = {...value}) => {
    console.log((x.number *= 2))
}

multiply() // 20
multiply() // 20
multiply(value) // 20
multiply(value) // 40