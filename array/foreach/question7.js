/**
 *  Write a function that squares each element
 *  in the array using the 'forEach' method.
 * 
 *  input = [2, 3, 5, 7]
    output = [4, 9, 25, 49]

 */

let input = [2, 3, 5, 7]

input.forEach((item, index) => input[index] = item*item)

console.log(input)