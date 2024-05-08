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

    console.log(members) // [{name: 'hi'}]
 * 
 */
    ``

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

/**
 *      let user = {
            name: 'Roadside coder',
            age: 24,
            fn: function() {
                return 'hello'
            }
        }

        const objClone = Object.assign({}, user)
        // const objClone = JSON.parse(JSON.stringify(user))
        // const objClone = {...user}
        console.log(user.fn())
        console.log(objClone.fn())
 * 
 */

//----------------------------------------------------------------------------//

/**
 *      const person = {
            firstName: 'John',
            lastName: 'Doe',
            age: 30,
            address: {
            street: '123 Main St',
            city: 'Anytown',
            country: 'USA'
            },
            hobbies: ['reading', 'traveling', 'photography']
        };
        
        // Write a function to update the person's age to 35 and add a new hobby 'cooking'.
        function updatePersonInfo(person) {
            // Your code here
            person.age = 35;
            person.hobbies.push('writing')
        }
        
        updatePersonInfo(person);
        console.log(person);
 * 
 */

//---------------------------------------------------------------------------------------//

/**
 *      const student = {
            name: 'Alice',
            age: 20,
            grades: {
            math: 90,
            science: 85,
            history: 95
            },
            sports: ['basketball', 'soccer', 'tennis']
        };
        
        // Write a function to calculate the average grade of the student.
        function calculateAverageGrade(student) {
            // Your code here
            let total = 0;
            let count = 0;
            let grades = student.grades

            // object.keys will give you the keys in an array, so you can do array operations in it, like .length
            if (Object.keys(grades).length === 0) {
                return 0;
            }

            for (let key in grades) {
                total += grades[key]
                count ++
            }
            return total/count

        }
        
        const averageGrade = calculateAverageGrade(student);
        console.log(`Average grade: ${averageGrade}`);
 * 
 */
  
//--------------------------------------------------------------------//

/**
 *      const employees = [
            { id: 1, name: 'Alice', department: 'HR', salary: 50000 },
            { id: 2, name: 'Bob', department: 'Engineering', salary: 60000 },
            { id: 3, name: 'Charlie', department: 'Marketing', salary: 55000 },
            { id: 4, name: 'David', department: 'Engineering', salary: 70000 },
            { id: 5, name: 'Eve', department: 'HR', salary: 52000 }
        ];
        
        // Write a function to calculate the total salary of all employees in a given department.
        function calculateTotalSalary(employees, department) {
            // Your code here
            let totalSalary = 0;
            for (let i=0; i<employees.length; i++) {
                let depart = employees[i].department
                if (depart === department) {
                    totalSalary += employees[i].salary
                }
            }
            return totalSalary
        }
        
        const hrTotalSalary = calculateTotalSalary(employees, 'HR');
        console.log(`Total salary of HR department: ${hrTotalSalary}`);
 * 
 */
  
//-----------------------------------------------------------------------------//

/**
 * 
 *      const employees = [
            { id: 1, name: 'Alice', department: 'HR', salary: 50000 },
            { id: 2, name: 'Bob', department: 'Engineering', salary: 60000 },
            { id: 3, name: 'Charlie', department: 'Marketing', salary: 55000 },
            { id: 4, name: 'David', department: 'Engineering', salary: 70000 },
            { id: 5, name: 'Eve', department: 'HR', salary: 52000 }
        ];
        
        // Write a function to calculate the total salary of all employees in a all department.
        function calculateTotalSalary(employees) {
            // Your code here
            let totalSalaryBasedOnDepartment = new Map()
            for (let i=0; i<employees.length; i++) {
                if (totalSalaryBasedOnDepartment.has(employees[i].department)) {
                    let value = totalSalaryBasedOnDepartment.get(employees[i].department)
                    let newValue = value + employees[i].salary
                    totalSalaryBasedOnDepartment.set(employees[i].department, newValue)
                } else {
                    totalSalaryBasedOnDepartment.set(employees[i].department, employees[i].salary)
                }
            }
            console.log(totalSalaryBasedOnDepartment)
        }
        
        const hrTotalSalary = calculateTotalSalary(employees);
        console.log(`Total salary of all department: ${hrTotalSalary}`);
 * 
 */

//----------------------------------------------------------------------------------//

/**
 *  const inventory = {
            items: [
            { id: 1, name: 'Apple', quantity: 10 },
            { id: 2, name: 'Banana', quantity: 20 },
            { id: 3, name: 'Orange', quantity: 15 }
            ],
            // Write a function to add a new item to the inventory.
            addItem: function(id, name, quantity) {
            // Your code here
            this.items.push({id: id, name: name, quantity: quantity})
            return this.items
            },
            // Write a function to remove an item from the inventory by its id.
            removeItemById: function(id) {
            // Your code here
            for (let i=0; i<this.items.length; i++) {
                if (this.items[i].id === id) {
                    this.items.splice(i,1)
                    break;
                }
            }
            },
            // Write a function to update the quantity of an item in the inventory by its id.
            updateItemQuantityById: function(id, newQuantity) {
            // Your code here
            for (let i=0; i<this.items.length; i++) {
                if (this.items[i].id === id) {
                    this.items[i].quantity = newQuantity
                    break;
                }
            }
            }
        };
        
        // Add a new item to the inventory
        inventory.addItem(4, 'Grapes', 25);
        console.log(inventory.items);
        
        // Remove an item from the inventory by its id
        inventory.removeItemById(2);
        console.log(inventory.items);
        
        // Update the quantity of an item in the inventory by its id
        inventory.updateItemQuantityById(1, 15);
        console.log(inventory.items);
 * 
 */
  