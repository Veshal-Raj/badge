// Promises in JavaScript
// Callbacks

console.log("start")

function importantAction(username, cb) {
    setTimeout(() => {
        cb(`Subscribe to ${username}`)
    }, 1000)
}

function likeTheVideo(video, cb) {
    setTimeout(() => {
        cb(`Like the ${video} video`);
    }, 1000)
} 

const message = importantAction('Roadside Coder', (message) => {
    console.log(message)
    likeTheVideo("JavaScript Interview Questions", (action)=>{
        console.log(action)
    })
})

console.log('stop')