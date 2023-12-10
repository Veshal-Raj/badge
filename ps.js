/**
 * 
 *      Q) sum(1)(2)(3).....(n)(), find a best solution for this.
 *      Amazon interview question  
 */

let sum = function(a) {
    return function(b) {
        if (b) {
            return sum(a+b)
        }
        return a;
    }
}

let result = sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)()
console.log(result)