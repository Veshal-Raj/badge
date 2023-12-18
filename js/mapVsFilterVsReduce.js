/*
    map filter reduce are basically array methods.


    function vs methods
    ------------------
    function is a self contained block of code, that performs
    a specific task that can be called a point upon to perform 
    that task as many times as needed

    method is a function which is associated with in a Object or a class
    and if you want to call it you need to create a specific instance of that
    class.  for example: person.sayHello()

*/

/**
 *      The map method is used for creating a new array from existing one
 *      by applying a function to each one of the element of the first array.
 *      
 *      the function inside the map is a callback function
 * 
 */

const nums = [1,2,3,4]

const multiplyThree = nums.map((num, i, arr ) =>{
    // the first parameter in map is to interate the elements in the array.
    // the second parameter is the index of each element in the original array.
    // the third parameter is the whole array.
    return num*3 + i;
})

console.log(multiplyThree)

/**
 *      The filter methods takes each elements in an array and it 
 *      applies a conditional statement against it, and if the condition
 *      is true, the elements gets pushed into the array, and if the 
 *      condition is false, then the elements don't get pushed into the array.
 *  
 *      the function inside the filter is a callback function,
 *      filter also takes three parameter, num, index and array
 */


const moreThanTwo = nums.filter((num) => num>2)
console.log(moreThanTwo)


/**
 *      The reduce method reduces the array of values into just one value.
 *      just like map and filter the reduce also execute the callback for
 *      each element of the array.
 * 
 *      filter takes two things, a callback function and a inital value
 *      the callback function takes 4 values as parameter, accumulator, current value,
 *      index and the array.
 * 
 *      accumulator is the result of the previous commutation
 *      if there is no inital value, it takes first element of array as value for accumulator
 *      
 *      
 */

const sum = nums.reduce((accu, curr, i, arr) => {
    return accu + curr
}, 0)
console.log(sum)

