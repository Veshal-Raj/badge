// Create a button UI and add debounce as follows =>
//  ---> Show "Button Pressed <X> Times" every time button is pressed
//  ---> Increase "Triggered" <Y> Times" count after 800ms of debounce

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector('.increment_pressed')
const count = document.querySelector(".increment_count")

var pressedCount = 0;
var triggerCount = 0;

btn.addEventListener("click", () => {
    btnPress.innerHTML = ++pressedCount;
    count.innerHTML = ++triggerCount;
})