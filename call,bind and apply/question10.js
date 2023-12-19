// Bound function

function f() {
    console.log(this) // Window object
}

let user = {
    g: f.bind(null)
}

user.g()

