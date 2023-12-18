// 'this' keyword in JavaScript (Implicit Binding)
// Explain 'this' keyword?

// this.a = 5;

// console.log(this.a) // 5

// let user = {
//     name: 'Veshal',
//     age: 22,
//     childObj: {
//         newName: "Roadside Coder",
//         getDetails(){
//             console.log(this.newName, "and", this.name) // Roadside Coder and undefined
//         }
//     }
// }

// user.childObj.getDetails()

let user = {
    name: 'Veshal',
    age: 22,
    getDetails:()=>{
        console.log( this.name) // undefined, this is pointing to the window object
    },
    childObj: {
        newName: "Roadside Coder",
    }
}

user.getDetails()

