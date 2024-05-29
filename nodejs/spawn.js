const cp = require('child_process')

let props = {
    list: 'dir',
    folder: 'mkdir',
    copy: 'cp'
}

// let child = cp.spawn(props.list, [], { cwd : ".." , shell: true})

// child.stdout.on("data", (data) => {
//     console.log(`data:\n${data}`)
// })

// child.stderr.on("data", (err) => {
//     console.log(`err occured: ${err}`)
// })

// let copy = cp.spawn(props.copy, ["cp3.js", "copy.js"], { cwd: "..",shell: true})

// copy.on("exit", () => {
//     console.log('copied successfully')
// })

// copy.on("error", (err) => {
//     console.log(`error occured while copy: ${err}`)
// })

let Dir = cp.spawn(props.folder, ["CSS"], {shell:true})

Dir.on("exit", () => {
    console.log('--------')
})