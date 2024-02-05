/**
 *      Write a function that converts each elements of an 
 *      array to uppercase using the 'forEach' method
 * 
 *      input = ['apple', 'banana', 'orange']
 *      output = ['APPLE', 'BANANA', 'ORANGE']
 */

let input = ['apple', 'banana', 'orange']

input.forEach((item, index) => input[index] = item.toUpperCase())

console.log(input)