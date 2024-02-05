/**
 *   Write a function that finds the maximum elements
 *  in an array using the 'forEach' method
 *  
 *  input = [7, 2, 9, 1, 5]
    output = 9
 *  
 */

let input = [7, 2, 9, 1, 5]

let largest = Number.NEGATIVE_INFINITY

input.forEach(item => {
    if (item > largest) largest = item
})

console.log(largest)