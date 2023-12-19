// Synchronus vs Asynchronous Code

/**
// Sync
console.log('Start')
console.log('Subscribe to Roadside Coder')
console.log('Finish')

// Async
console.log('Start')
setTimeout(() => {
    console.log('Subscribe to Roadside Coder')
},1000)
console.log('Finish')

 */

console.log("start")

function importantAction(username) {
    setTimeout(() => {
        return `Subscribe to ${username}`
    }, 1000)
}

const message = importantAction('Roadside Coder')

console.log(message)

console.log('stop')