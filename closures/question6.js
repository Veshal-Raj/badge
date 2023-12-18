// what is module pattern?

var Module = (function () {
    function privateMethod() {
        // do something
    }

    return {
        publicMethod: function() {
            // can call privateMethod();
        }
    }
})()

/**
 *      here we are not returning or giving access to
 *      private function to the outside world, but publicFunction
 *      can access and use it.
 */

var module1 = (function() {
    function privateMethod(){
        console.log("private")
    }

    return {
        publicMethod: function(){
            console.log("public")
            privateMethod() // you will get access to privateMethod
        }
    }
})()

module1.publicMethod() // gives you output public
// module1.privateMethod() // gives you error