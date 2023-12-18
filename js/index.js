//  var vs let vs const
// scope

// {
//     const a = 10
// }
// console.log(a) // Reference error (Block scope)

// {
//     let b = 10
// }
// console.log(b) // Reference error (Block scope)

// {
//     var c = 10
// }
// console.log(c) // output - 10 (Global scope)

// function test() {
//     let a = 'Hello';
//     if (true) {
//         let a = 'Hi';
//         console.log(a)
//     }
//     console.log(a)
// }

// test() // output -->   Hi Hello

// var a;
// var a;
// // the above case of var is ok

// let a;
// let a;
// // the above case of let is not ok, it throws error, SyntaxError: Identifier 'a' has already been declared

// const b;
// const b;
// // the above case for const also throws the same error, SyntaxError: Identifier 'a' has already been declared


// console.log(count)
// let count = 1;

// (function a() {
//     console.log(a,b,c)
//     const a = 1;
//     let b = 2;
//     var c = 5;
// })()

// here we cannot access the variables a and b because they are in temperal death zone. so we cannot access them.












