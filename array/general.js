const nums1 = [1,2,3,4,5,6,7,8,9]
const nums2 = [1,2,3,4,5,6,7,8,9]
const nums3 = [1,2,3,4,5,6,7,8,9]
const nums4 = [1,2,3,4,5,6,7,8,9]
const nums5 = [1,2,3,33,4,32,22,-34,5,6,7,8,9]
const nums6 = [1,2,3,4,5,6,7,8,9]
const nums7 = [1,2,3,4,5,6,7,8,9]
const nums8 = [1,2,3,4,5,6,7,8,9]

const a = nums1.map((item) => item*2)
// console.log('double --> ',a)
const b = nums1.filter((item) => item%2==0)
// console.log('even --> ',b)
const sum = nums1.reduce((acc,curr) => acc+curr,0)
// console.log('sum --> ', sum)
const c = nums1.some((item)=> item>3)
// console.log('some ---> ', c) // some returns true or false, it checks atleast one of it follows the condition.
const d = nums1.every((item) => item>3)
// console.log('every ---> ', d) // every returns true or false, it checks on every elements whehter they are satisfying the condition or not.

const e = nums1.find((item) => item/2 === 2)
// console.log(e) // return the element which satisfy the given condition

// spread operator
// console.log([...nums1, ...nums2]) 

function sum1(...numbers){ // this will take n number of params, that's how rest operator works
    return numbers
}
// console.log(sum1(nums1,nums2))

// concat
const newArr = nums2.concat(nums1)
// console.log(newArr) // gives a concated output

// slice
const newArr1 = nums1.slice(5,7)
const newArr2 = nums1.slice(-2) // starts from the end
// console.log(newArr1) // slice(a,b) ==> a is the start index and b is the end index
// console.log(newArr2)

// splice
const newArr3 = nums1.splice(1,5, 'hello') // splice will make the chages in the original array itself, it takes 3 parameters, start index, end index and the element to be added, and the added index will be the start index
// console.log('splice --> ',newArr3)
// console.log('original --> ',nums1)

// fill
nums2.fill(0) // fill will fill all the elements of the original array with the value we gave it.
// console.log(nums2)

nums3.fill(0,4) // if i gave like this, this will fill the value after the the index that we have provided, and the index is the second params.
// console.log(nums3)

// findIndex
const ab = nums4.findIndex((item) => item === 4) // this will give the index of the element that we are giving.
// console.log(ab)

// Flat
const abc =  [1,2,3,[4,5,6,[6,7,8], 4,5,6],3,3,5]
const flattendABC = abc.flat(2) // this will flatten the abc, in the paranthesis, we can give the level of the flatten
// console.log(flattendABC) 

// reverse 
const abcd = nums1.reverse() // this will reverse the array
// console.log(abcd)

console.log('original nums5 --> ',nums5)
const sortedAscending = nums5.sort((a,b) => a-b)
console.log('Ascending --> ',sortedAscending )
const sortedDescending = nums5.sort((a,b) => b-a)
console.log('Descending --> ', sortedDescending)