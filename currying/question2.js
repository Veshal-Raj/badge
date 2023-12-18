/**
 *      evaluate("sum")(4)(2) => 6
 *      evaluate("multiply")(4)(2) => 8
 *      evaluate("divide")(4)(2) => 2
 *      evaluate("substract")(4)(2) => 2
 */

function evaluate(operation) {
    return function(a) {
        return function (b) {
            if (operation === "sum") return a+b
            else if (operation === "multiply") return a*b
            else if (operation === "divide") return a/b
            else if (operation === "substract") return a-b
            else return "invalid operation"
        }
    }
}

// console.log("sum", evaluate("sum")(4)(2))
// console.log("substract", evaluate("substract")(4)(2))
// console.log("multiply", evaluate("multiply")(4)(2))
// console.log("divide", evaluate("divide")(4)(2) )

const mul = evaluate("multiply")
const sum = evaluate('sum')
const sub = evaluate('substract')
const div = evaluate('divide')

console.log("sum",mul(2)(3))
console.log("substract",sum(9)(7))
console.log("multiply",sub(9)(6))
console.log("divide",div(8)(4))