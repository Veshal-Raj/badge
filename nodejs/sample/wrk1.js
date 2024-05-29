const fs = require('fs')
const crypto = require('crypto')

const start = new Date().getMilliseconds()

setTimeout(() => console.log('Hello form timer 1'), 0) // 12 is the breaking point. more than 12, setTimeout will log last

setImmediate(() => console.log('Hello from immediate Fn 1'))

fs.readFile('sample.txt', 'utf-8', () => {
    console.log('IO polling finished')

    setTimeout(() => console.log('Hello from timer 2'), 0)
    setTimeout(() => console.log('Hello from timer 3'), 5 * 1000)

    setImmediate(() => console.log('Hello from immediate Fn 2'))

    // CPU intensive task
    crypto.pbkdf2('password1', 'salt1', 100000, 1024, 'sha512', () => {
        console.log(`${start}`, 'Password1 done')
    })
    
    crypto.pbkdf2('password2', 'salt1', 100000, 1024, 'sha512', () => {
        console.log(`${start}`, 'Password2 done')
    })

    crypto.pbkdf2('password3', 'salt1', 100000, 1024, 'sha512', () => {
        console.log(`${start}`, 'Password3 done')
    })

    crypto.pbkdf2('password4', 'salt1', 100000, 1024, 'sha512', () => {
        console.log(`${start}`, 'Password4 done')
    })

    crypto.pbkdf2('password5', 'salt1', 100000, 1024, 'sha512', () => {
        console.log(`${start}`, 'Password5 done')
    })
})

console.log('Hello from Top level code')