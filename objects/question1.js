
const func = (function(a) {
    delete a;
    return a;
})(5)

console.log(func) // output 5

const user = {
    name: 'Roadside Coder',
    age: 24,
    "like this video": true
}

console.log(user["like this video"])
delete user["like this video"]
console.log(user)

// How to add dynamic Key value pairs to the object?

const property = 'FirstName';
const name1 = "Veshal Raj"

const user1 = {
    [property]: name1
}

console.log(user1)
console.log(user1.FirstName)

