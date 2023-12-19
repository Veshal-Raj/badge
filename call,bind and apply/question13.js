// Partial application for login function

function checkPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "Roadside Coder") ok()
    else fail()
}

let user = {
    name: "Veshal Raj",

    login(result) {
        console.log(this.name + (result ? "login successful" : "login failed"))
    }
}

checkPassword(user.login.bind(user,true) . user.login.bind(user,false))