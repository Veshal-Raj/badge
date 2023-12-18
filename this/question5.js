// What is the output

const user = {
    name: 'Veshal Raj',
    logMessage() {
        console.log(this.name) // undefined
    }
}

setTimeout(user.logMessage, 1000)

// in this case, we are passing the logMessage as a callback fn,
// so the function is working independently, and it will focus on window
// object, and in the window object there is no name, so it will gives undefined.


// How to fix this issue?

//  instead of setting as callback function, we can set it as a normal function

setTimeout(function(){
    user.logMessage() // now this will gives you the output Veshal Raj
},1000)