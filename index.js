// const e = require("express")

document.querySelector("#grandparent")
.addEventListener('click', () => {
    console.log("Grandparent  clicked")
},true)  // trikkling

document.querySelector("#parent")
.addEventListener('click', () => {
    console.log("parent  clicked")
},false) // bubbling

document.querySelector("#child")
.addEventListener('click', (e) => {
    console.log("child  clicked")
    // e.stopPropagation()
    // e.stopImmediatePropagation()
}, true) // trikkling


/**
 *  the third argument of the addEventListener is byDefault be false, 
 *  which leads to Event Bubbling, if we make it true, 
 *  then Event Capturing / Event Trikkling will occurs 
 */