let multiply = function(x,y) {
  console.log(x*y)
}

// let multiply2 = multiply.bind(this,2)
// multiply2(5)

/**
 * 
 *  here what bind method is doing is that,
 *  it will create a copy fo the multiply function 
 *  and we are doing operaton on the copy of the 
 *  multiply function.
 * 
 */

let multiply2 = multiply.bind(this,2,3)
multiply2(5)

/**
 *     output is 6, because here the x will be taken as 2 and
 *     the y is taken as 3, it will ignore the parameter of the multiply2().
 *  
 */

let multiply3 = multiply.bind(this,2,3,3,4,56,4)
multiply2(5)

/**
 *      output is 6, because the x will taken as 2 and 
 *      the y wil be taken as 3, it will ignore all other paramaters unless we are using them.
 */