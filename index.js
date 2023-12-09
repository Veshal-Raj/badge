// const e = require("express")

document.querySelector("#grandparent")
.addEventListener('click', () => {
    console.log("Grandparent  clicked")
},true)  // trikkling

document.querySelector("#parent")
.addEventListener('click', (e) => {
    console.log("parent  clicked")
    // e.stopPropagation()
},true) // bubbling

document.querySelector("#child")
.addEventListener('click', (e) => {
    console.log("child  clicked")
    e.stopPropagation()
    // e.stopImmediatePropagation()
}, true) // trikkling


/**
 *  stop propagation method helps us to stop proprating 
 *  from the propagating cycle
 */