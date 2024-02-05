// write a function that calculates the sum of all elements
// in an array using the 'forEach' method.

// input --> [1, 2, 3, 4, 5]
// output --> 15

let arr = [1, 2, 3, 4, 5]

let sum = 0;
arr.forEach(item => sum+=item)
console.log(sum)

