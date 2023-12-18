// Create a function multiplyByTwo(obj) that multiplies all
// numeric property values of nums by 2.

let nums = {
    a: 100,
    b: 200, 
    title: "my nums"
}

multiplyByTwo(nums)

function multiplyByTwo(obj){
    for(key in obj) {
        if (typeof obj[key] === 'number'){
            obj[key] *= 2;
        }
    }
}

console.log(nums)