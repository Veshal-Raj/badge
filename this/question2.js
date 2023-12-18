

class user{
    constructor(n){
        this.name = n
    }
    
    getName(){
        console.log(this.name)
    }
}

const User = new user("Veshal")

// console.log(User)
User.getName() //Veshal