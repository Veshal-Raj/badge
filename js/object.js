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

