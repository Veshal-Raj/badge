// What is the output?

function changeAgeAndReference(person){
    person.age = 25;
    person = {
        name: "Veshal",
        age: 22,
    }
    return person;
}


const personObj1 = {
    name: 'Alex',
    age: 30,
}

const personObj2 = changeAgeAndReference(personObj1)

console.log(personObj1) // { name: 'Alex', age: 25 }
console.log(personObj2) // { name: 'Veshal', age: 22 }