// what is iife

// (function sum(num) {
//     console.log(num + num)
// })(10)

// what is the output

(function(x) {
    return (function(y) {
        console.log(x)
    })(2)
})(1)       // the output will be 1, here it will search the x in the inner scope and if it is not found then 
            // it will search on the outer scope
