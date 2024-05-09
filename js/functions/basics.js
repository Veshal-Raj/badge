// what is function declaration

function square (num) {
    return num * num        // this is also called function defeniton and function statement
}

// what is function expression

const fnExp = function() {
    return 'I am a function expression'
}

// what is first class functions

// if the function is treated like a variable then it is called first class function

function square1 (num) { // here the function is passed as a variable to another function
    return num * num     // this is called first class function 
}

function displaySquare(fn) {
    console.log('square is ',fn(5))
}

displaySquare(square)