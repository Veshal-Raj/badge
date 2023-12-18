// What will be logged to console?

let count = 0;
(function printCount(){
    if (count === 0){
        let count = 1 // shadowing
        console.log(count)
    }

    console.log(count)  // count = 0
})()