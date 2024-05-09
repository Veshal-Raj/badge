/**
 *      function createCount () {
            let count = 0;
            function innerCount () {
                count++
                console.log(count)
            }
            return innerCount
        }

        let fn = createCount()
        fn() // count 1
        fn() // count 2


 * 
 */
//-------------------------------------------------//
/**
 * 
 *       function createCount () {
            let count = 0;
            let b = {
                name:'veshal'
            }
            function innerCount () {
                count++
                console.log(count)
                console.log(b.name)
            }
            return innerCount
        }

        let fn = createCount()
        fn() // count 1
        fn() // count 2 
 * 
 */

//-------------------------------------------------------------//

/**
 *      function createCount() {
            let count = 0;
            function innerCount () {
                count++
                console.log(`function called ${count} times.`)
            }
            function reset() {
                count = 0
                console.log(`function called ${count} times.`)
            }

            return { innerCount, reset}
        }

        let a = createCount()
        a.innerCount()
        a.innerCount()
        a.innerCount()
        a.innerCount()
        a.innerCount()
        a.innerCount()
        a.reset()
 * 
 */

//------------------------------------------------------------------//
