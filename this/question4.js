// What is the result of accessing its ref? Why?

function makeUser(){
    return {
        name: "John",
        ref: this,
     }
}

let user = makeUser()

console.log(user.ref.name) // undefined

/**
     function makeUser(){
            return {
                name: "John",
                ref: this,
            }
        }

        let user = makeUser()

        console.log(user.ref.name) // undefined

        How to fix this?

 */

        function makeUser1(){
            return {
                name: "John",
                ref(){
                    return this
                }
             }
        }
        
        let user1 = makeUser1()
        
        console.log(user1.name) // John
        console.log(user1.ref().name) // John