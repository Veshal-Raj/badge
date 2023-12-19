// Explict Binding with Arrow Function

const age = 10;

var person = {
    name: 'Veshal Raj',
    age: 20,
    getAgeArrow: () => console.log(this.age),
    getAge: function() {
        console.log(this.age)
    }
}

var person2 = {age: 22};
person.getAgeArrow.call(person2) // undefined
person.getAge.call(person2) // 22