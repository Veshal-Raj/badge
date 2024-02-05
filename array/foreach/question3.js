/**
 *      Write a function that creates a new array containing only even numbers
 *      from the given array using the 'forEach' method.
 * 
 *      input = [1, 2, 3, 4, 5, 6]
        output = [2, 4, 6]
 */

    
let input = [1, 2, 3, 4, 5, 6]

let output= []
input.forEach((item) => {
    if (item%2 === 0) output.push(item)
})
console.log(output)