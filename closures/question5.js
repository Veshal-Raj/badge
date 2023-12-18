// How would you use a closure for creating a private counter?

function counter() {
    var _counter = 0;

    function add(increment){
        _counter += increment;
    }

    function retrieve(){
        return "Counter = "+ _counter;
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