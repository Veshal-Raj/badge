// What is destructing in objects?

let user = {
    name: 'Veshal',
    age: 22,
};

const name = "Roadside Coder"
const { name: myName } = user
console.log("myName: ",myName)
console.log('name: ', name)

let user1 = {
    name1: 'Veshal',
    age1: 22,
    fullName: {
        firstName: 'Veshal',
        lastName: 'Raj'
    }
};

const name1 = 'John Lennon';

const { fullName: {firstName} } = user1
console.log(firstName) // Veshal
