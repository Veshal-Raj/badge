// How to deep copy / clone an object ?


let user = {
    name: "Roadside Coder",
    age: 24,
}

// const objClone = Object.assign({}, user)
// const objClone = JSON.parse(JSON.stringify(user))
const objClone = {...user}
objClone.name = 'Veshal'
console.log(user, objClone)

// we can use the above three approaches.