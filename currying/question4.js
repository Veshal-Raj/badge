// Currying vs Partial Application

// Partial Applications

function sum(a){
    return function(b,c){
        return a+b+c;
    }
}

const x = sum(10);
console.log(x(5,6))
console.log((3,4))

// or

console.log(sum(20)(3,4))

// currying

function sum(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(sum(2)(4)(5));