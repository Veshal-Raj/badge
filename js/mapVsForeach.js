// Map Vs forEach

/**
 *      Map and forEach are array functions which are used to iterate through
 *      the array.
 */

const arr = [1,2,3,4,5,6]
console.log(arr)

const mapArr = arr.map((a) => {
    return a +2;
})

const foreachArr = arr.forEach((a,i) =>{
    arr[i]= a*2
})

console.log(arr)

console.log(mapArr)
console.log(foreachArr)
console.log(arr)

/**
 *      we can give the .filter.reduce function with the map array method, 
 *      but in case of forEach we cannot give like that
 * 
 *      and map creates a new array and do the operations in the new array,
 *      but the foreach doesn't create a new array, it just modifies the existing array.
 */