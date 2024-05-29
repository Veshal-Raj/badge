const cp = require('child_process')



// cp.exec('start chrome https://youtu.be/QeeqFKEjc4w?si=glnc1JSc2dPGx7pF')

// let output = cp.execSync('node hello.js')

// console.log(output.toLocaleString())

// cp.execFile('node hello.js',)

var progs = {
    list: "dir"
}

let o = cp.spawn(progs.list)

