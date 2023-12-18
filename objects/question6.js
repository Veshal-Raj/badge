// What is JSON.stringify and JSON.parse ?

const user = {
    name: 'Veshal',
    age: 22,
}

const strObj = JSON.stringify(user) // this wil be a string
const parsStr = JSON.parse(strObj) // this will be an object
console.log(strObj)
console.log(parsStr)


// Where can you use these things, How can it be useful?

localStorage.setItem('test', strObj) // this will store as, { "name": "Veshal", "age":24}
localStorage.setItem('test', user) // this will store as, [object Object]
// so for storing in the local storage we use JSON.stringify(user)

