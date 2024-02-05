/**
 *   Write a function that filters out all the strings from the 
 *   array using the foreach method.
 * 
 *  input = [1, 'apple', 2, 'banana', 'orange', 3]
    output = ['apple', 'banana', 'orange']

 */

let input = [1, 'apple', 2, 'banana', 'orange', 3]

let output = []
input.forEach((item) => {
    if (typeof item === "string") {
        output.push(item)
    }
} )

console.log(output)