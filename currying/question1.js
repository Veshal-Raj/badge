// sum(2)(6)(1)


function sum(a){
    return function(b){
        if (!b){
            return a
        } else{
            return sum(a+b)
        }
    }
}

console.log(sum(2)(6)(1)(3)(6)(45)())