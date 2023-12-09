document.querySelector("#grandparent")
.addEventListener('click', () => {
    console.log("Grandparent  clicked")
},true)

document.querySelector("#parent")
.addEventListener('click', () => {
    console.log("parent  clicked")
},true)

document.querySelector("#child")
.addEventListener('click', () => {
    console.log("child  clicked")
}, true)


/**
 *  the third argument of the addEventListener is byDefault be false, 
 *  which leads to Event Bubbling, if we make it true, 
 *  then Event Capturing / Event Trikkling will occurs 
 */