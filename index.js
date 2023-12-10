// function Addition(a,b,c) {
//   return a+b+c
// }



function Addition(a) {
  return function(b) {
    return function(c) {
      return a+b+c;
    }
  }
}

// let res = Addition(1,2,3)
// console.log(res)
// console.log(Addition(2,3,4))

// console.log(a(5,6,7))

// let a = Addition(1)
// console.log(a)
// let b = a(2)
// console.log(b)
// let c = b(3)
// console.log(c)



// instead of this

let a = Addition(1)(2)(3)
console.log(a)