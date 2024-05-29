const cp = require('child_process')

var props = {
    list: 'ls',
    remove: 'rd' // for removing folders
}

let child = cp.exec(props.remove + " css")

child.on('exit', (code) => {
    if (code === 0) {
        console.log('folder removed')
    }else {
        console.log('something went wrong')
    }
})

child.on('error', (err) => {
    console.log(`error: ${err}`)
})