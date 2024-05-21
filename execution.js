// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log('first line'); // 1

function firstFunction() {
    console.log('inside first function'); // 5
    let promise = new Promise((res, rej) => {
        console.log('inside promise'); // 6
        setTimeout(() => {
            console.log('inside setTimeout'); // 15
            res(); // Resolve the promise after the timeout
        }, 2000);
    });

    promise.then(() => {
        console.log('promise resolved'); // 16
    }).catch(() => {
        console.log('error');
    });
}

console.log('outside first function'); // 2

async function secondFunction() {
    console.log('inside second function');  // 8
    setImmediate(() => {
        console.log('inside setImmediate'); //14
    });

    let interval = setInterval(() => {
        console.log('this is the message inside set interval'); // 17 18
    }, 2000);

    // Simulate an async wait for some time before clearing the interval
    await new Promise(res => setTimeout(res, 5000)); // Wait for 5 seconds
    clearInterval(interval);
    console.log('Interval cleared'); // 19
}
console.log('after second function') // 3

function thirdFunction(){
    console.log('inside third function'); // 10
    
    process.nextTick(()=>{
        console.log('inside process.nexttick') // 13
    })
    console.log('last of third function') // 11
}
console.log('after every function') // 4
// Call the functions
firstFunction();
console.log('after calling first function') // 7
secondFunction();
console.log('after calling second function') // 9
thirdFunction()
console.log('after calling third function') // 12
