/**
 *      Write a function that counts the occurences of each element in 
 *      the array and stores the results in an object. use the 'foreach' method.
 * 
 *      input = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
        output = [ 'apple': 3, 'banana': 2, 'orange': 1 ]

 */

let input = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

let occurences = {}

input.forEach((item) => {
    if (occurences[item]) {
        occurences[item]++
    } else {
        occurences[item] = 1
    }
    
})

console.log(occurences)