// let multiply = function(x,y) {
//   console.log(x*y)
// }



let multiply = function (x) {
  return function(y) {
    console.log(x*y)
  }
}


let multiply1 = multiply(2)
multiply1(3)


let multiply2 = multiply(2)
multiply2(3)


/**
 *    This is using closure.
 */