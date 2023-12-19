// Call with function inside object

const age = 10;

var person = {
    name: 'Veshal',
    age: 20,
    getAge: function() {
        return this.age;
    }
}

var person2 = { age: 24 }
console.log(person.getAge.call(person2)) // 24
console.log(person.getAge.apply(person2)) // 24
console.log(person.getAge.bind(person2)()) // 24
// person.getAge.call(person2)