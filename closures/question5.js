// How would you use a closure for creating a private counter?

function counter() {
    var counter = 0;

    function add(increment){
        counter += increment;
    }

    function retrieve(){
        return "Counter = "+ counter;
    }

    return {
        add, 
        retrieve,
    }
}

const c = counter();
c.add(38)
c.add(2)
console.log(c.retrieve())