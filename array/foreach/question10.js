/**
 *  Write a function that finds and returns the index of a specific element
 *  in the array. if the element is not present, return -1. Use the 'foreach' method.
 * 
 *  input = [10, 20, 30, 40, 50]
    element to find = 30
    output = 2
 * 
 */


function hello(arr, target) {
    let resultIndex = -1
    arr.forEach((item, index) => {
        if (item === target) resultIndex =  index
    } )
    return resultIndex
}

let a = hello([10,20,30,40,50], 10)
console.log(a)