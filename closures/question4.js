// Block scope and setTimeout

function a(){
    for (var i=0; i<3; i++){
        setTimeout(function log() {
            console.log(i) // What is logged?
        }, 1000)
    }
}

// a()

/**
 *      the output is 3 3 3;
 *      this is because of var
 */

function ab(){
    for (let i=0; i<3; i++){
        setTimeout(function log() {
            console.log(i) // What is logged?
        }, 1000)
    }
}

// ab()

/**
 *      the output is 0 1 2;
 *      let is block scope
 */



    for (var i=0; i<3; i++){
        function inner(i){

            setTimeout(function log() {
                console.log(i) // What is logged?
            }, 1000)
        }
        inner(i)
    }

