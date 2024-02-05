/**
 *  write a function that reverses the order of 
 *  elements in the array using the 'forEach' method.
    
    input = [1, 2, 3, 4, 5]
    output = [5, 4, 3, 2, 1]

*/

let input = [1, 2, 3, 4, 5]

let arr = []

input.forEach(item => arr.unshift(item))

console.log(arr)