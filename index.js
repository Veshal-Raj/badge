let multiply = function(x,y) {
  console.log(x*y)
}

let multiply2 = multiply.bind(this,2)
multiply2(5)