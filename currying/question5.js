// curry() implementation
// converts f(a,b,c) into f(a)(b)(c)

function curry(func){
    return function curriedfunc(...args) {
        if (args.length >= func.length){
            return func(...args)
        } else {
            return function(...next) {
                return curriedfunc(...args, ...next)
            }
        }
    }
}

const sum = (a,b,c) => a+b+c;

const totalSum = curry(sum)

console.log(totalSum(2)(3)(4))