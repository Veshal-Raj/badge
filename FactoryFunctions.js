function personFactory(name) {
    return {
        talk(){
            return `Hello, I am ${name}!`
        }
    }
}

const me = personFactory('Veshal')
console.log(me.talk())

const ben = personFactory('Ben')
console.log(ben.talk())


console.log(personFactory("Ram").talk())

// simple
// no duplicates
// Data privacy
