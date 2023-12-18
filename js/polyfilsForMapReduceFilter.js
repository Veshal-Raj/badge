// polyfill for map()

const nums = [1,2,3,4]

// Array.map((num, i, arr) => {})

// Array.prototype.myMap = function(cb) {
//     let temp = []
//     for (let i=0; i<this.length; i++) {
//         temp.push(cb(this[i], i, this))
//     }
//     return temp
// }


// const multiplyThree = nums.myMap((num, i,arr) =>{
//     return num * 3;
// })
// console.log(multiplyThree)


// Array.filter((num, i, arr) => {})

// Array.prototype.myFilter = function(cb) {
//     let temp = []
//     for(let i=0; i<this.length; i++) {
//         if (cb(this[i], i, this)) temp.push(this[i])
//     }
//     return temp
// }

// const moreThanTwo = nums.myFilter((num, i, arr) =>{
//     return num>2
// })

// console.log(moreThanTwo)

// Array.reduce(() => {}, initialValue)

// Array.prototype.myReduce = function(cb, initialValue) {
//     var accumulator = initialValue;
//     for (let i=0; i<this.length; i++) {
//         accumulator = accumulator? cb(accumulator, this[i], i , this):this[i]
//     }
//     return accumulator
// }

// const checkReduce = nums.myReduce((accu, curr, i, arr)=>{return accu+curr}, 0)
// console.log(checkReduce)