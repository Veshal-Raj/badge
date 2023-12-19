// Fix the line 21 to make code work properly
function checkPassword(success, failed) {
    let password = prompt("password?", "");
    if (password === "Roadside Coder") success();
    else failed();
}

let user = {
    name: "Veshal Raj",

    loginSuccessful() {
        console.log(`${this.name} logged in`);
    },
    
    loginFailed() {
        console.log(`${this.name} failed to log in`);
    }
}

checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user));
