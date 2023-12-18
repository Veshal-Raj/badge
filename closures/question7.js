// Make this run only once

/**
 *  let view;
    function likeThisVideo(){
        view = "Roadside Coder"
        console.log("Subscribe to ", view)
    }

    likeThisVideo() // Subscribe to Roadside Coder
    likeThisVideo() // Subscribe to Roadside Coder
    likeThisVideo() // Subscribe to Roadside Coder
    likeThisVideo() // Subscribe to Roadside Coder

 */

let view;
function likeThisVideo(){
    let counter = 0;
    return function(){
        if (counter >0){
            console.log('Already subcribed to Roadside coder')
        } else {
            view = "Roadside Coder";
            console.log('Subscribe to ', view)
            counter++
        }
    }
}
let a = likeThisVideo()
a()
a()
