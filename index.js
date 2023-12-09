document.querySelector("#textAll").addEventListener('keyup', (e) => {
    console.log(e)
    if (e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase()
    }
})

/**
 * 
 *    Benefits
 *    --------
 *      1) Saves alot of memory(we need to attach only one single event handler)
 *      2) Writing less code
 *      3) Dom Manupilation
 *    
 *    Limitations
 *    -----------
 *      1) All the events are not bubbled up.
 *      2) Some events don't bubble up the heirachy,
 *         so we need to handle that. 
 * 
 * 
 */