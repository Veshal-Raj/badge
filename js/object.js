/**
 *  let user = {
    name: 'Veshal',
    age: 22,
    place: 'palakkad'
    }

    user.place = 'pattambi';

    delete user.age 
    console.log(user) // { name: 'Veshal', place: 'pattambi' }
 * 
 */

//---------------------------------------------------//

/**
 *  const func = (function(a) {
    delete a; // delete keyword is only used for deleting properties from an object
    return a;
    })(5)
    console.log(func) // 5
 * 
 */

//---------------------------------------------------//

/**
    let user = {
    name: 'Veshal',
    age: 22,
    'hello, Are you there?': true
    }

    console.log(user["hello, Are you there?"])  // true
    delete user["hello, Are you there?"]
    console.log(user) // { name: 'Veshal', age: 22 }
 * 
 */


//--------------------------------------------------------//

// add dynamic property

/**
 *      let property = "firstName";
        let name = "veshal raj"

        const user = {
            [property] : name
        }

        console.log(user) 
 * 
 */

//---------------------------------------------------------//

   /**
    *    let user = {
            name: 'Veshal',
            age: 22,
            'hello, Are you there?': true
        }

        for (let key in user) {
            console.log(user[key])
        }
    * 
    */

//-----------------------------------------------------------------//

// What is the output?

/**
 *      const obj = {
            a: 'one',
            b: 'two',
            a: 'three'
        }

        console.log(obj) // { a: 'three', b: 'two' }
 * 
 */

//---------------------------------------------------------------------//

// create a function multiplyByTwo(obj) that multiplies all numeric property values of num by 2

/**
 *      let nums = {
            a: 100,
            b: 200,
            title: "My nums",
        }

        const a = multiplyByTwo(nums)
        console.log(a)


        function multiplyByTwo(obj) {
            for (let key in obj) {
                if (typeof obj[key] === 'number') {
                    obj[key] = obj[key] * 2;
                }
            }
            return obj
        }
 * 
 */

//--------------------------------------------------------//

/**
 *      Deep copy an object
 *      ------------------      
 *      const user = {
            name: "Kingsley",
            age: 28,
            job: "Web Developer",
            incrementAge: function() {
            this.age++
            }
        }
        let clone = Object.assign({}, user)

        clone.incrementAge = 'hello'

        console.log(user)
        console.log(clone)
 * 
 */

//---------------------------------------------------------//

// what is the output?

/**
 *      const a = {}
        const b = { key: 'b' }
        const c = { key: 'c' }
        a[b] = 123;
        a[c] = 455

        console.log(a[b]) // 455
 * 
 */

// --------------------------------------------- //

// what is JSON.parse and JSON.stringify ?
/**
 * 
 *  const user = {
        name: 'hello',
        age: 33
    }

    const strObj = JSON.stringify(user)

    console.log(JSON.parse(strObj)) 
    // the most common usecase of this is storing data in the local storage
 * 
 */

//-------------------------------------------------------//

// what is the output?

// console.log([..."Hello"]) // ['H', 'e', 'l', 'l', 'o']

//-----------------------------------------------------//

/**
 *  const user = { name: 'veshal', age: 22 }
    const user2 = { admin: true, ...user }

    console.log(user2) // { admin: true, name: 'veshal', age: 22 } 
 * 
 */

//-------------------------------------------------------//
// what is the output

/**
 *      const settings = {
            username: "Piyush",
            level: 19,
            health: 90
        }

        const data = JSON.stringify(settings, ["level", "health"]) // (this will only stringify level and health)
        console.log(data) // {"level":19,"health":90}
 * 
 */

//--------------------------------------------------------------------//

// what is the output

/**
 * 
      const shape = {
            radius: 10,
            diameter() {
                return this.radius * 2;
            },
            perimeter: () => 2 * Math.PI * this.radius
        }

        console.log(shape.diameter()) // 20
        console.log(shape.perimeter()) // NaN
 * 
 */

//------------------------------------------------------------------------//
// what is the output

/**     
 *      let user = {
            name: 'Piyush',
            age: 56,
            fullName: {
                first: 'hello',
                second: 'man'
            }
        }

        const {fullName: { first }} = user

        console.log(first)
 */

//-------------------------------------------------------------------------//

// what is the output

/**
 *      function getItems(fruitList,  favouriteFruit, ...args) {
            return [...fruitList, ...args, favouriteFruit]
        }

        console.log(getItems(["banana", "apple"], "pear", "orange"))  // [ 'banana', 'apple', 'orange', 'pear' ]
 * 
 */

//--------------------------------------------------------------------------//
// what is the output

/**
 *      let c = { greetings: "hey!" }
        let d 
        d = c

        c.greetings = "hello"
        console.log(d.greetings) // hello
 * 
 */

//------------------------------------------------------------------------//

// what is the output

// console.log({a: 1} == { a: 1}) // false
// console.log({a: 1} === { a: 1}) // false

//------------------------------------------------------------------------//

// what is the output

/** * 
 *  let person = {name: 'hi'};
    const members = [person]
    person = null

    console.log(members)
 * 
 */

//-----------------------------------------------------------------------//

// what is the output

/**
 *  const value = { number: 10 }

    const multiply = (x={...value}) => {
        console.log((x.number *= 2))
    }

    multiply() // 20
    multiply() // 20
    multiply(value) // 20
    multiply(value) // 40
 * 
 */

//----------------------------------------------------------------------------//

// what is the output

/**
 *      
function changeAgeAndReference(person) {
    person.age = 25;
    person ={
        name: 'John',
        age: 50
    }
    return person
}

const personObj1 = {
    name: 'Alex',
    age: 55
}

const person2 = changeAgeAndReference(personObj1)

console.log(personObj1) // { name: 'Alex', age: 25 }
console.log(person2) // { name: 'John', age: 50 }
 * 
 */

//-----------------------------------------------------------------------//

// What is shallow copy and what is deep copy of an object? 
// how to deep copy / clone an object?

let user = {
    name: 'Roadside coder',
    age: 24
}

// const objClone = Object.assign({}, user)
// const objClone = JSON.parse(JSON.stringify(user))
const objClone = {...user}