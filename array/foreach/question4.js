/**
 *      Write a function that doubles each element in
 *      the array using the 'forEach' method.
 * 
 *      input = [2, 4, 6, 8]
        output = [4, 8, 12, 16]

 */

let input = [2, 4, 6, 8]

input.forEach((item, index) => input[index] = item*2 )

console.log(input)