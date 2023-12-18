// What is the output?

const user = {
    firstName: 'Vishal',
    getName(){
        const firstName = 'Veshal'
        return this.firstName;
    }
}

console.log(user.getName()) // Vishal