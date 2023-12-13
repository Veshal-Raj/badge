class Queue {
    constructor(){
        this.items = []
    }
    
    isEmpty(){
        return this.items.length === 0
    }
    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            console.log('Underflow: Queue is empty')
            return null
        }
        return this.items.shift()
    }

    front(){
        if(this.isEmpty()){
            console.log(' Queue is empty')
            return null
        }
        return this.items[0]
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.join(', '))
    }
}

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log('Queue elements:');
queue.print(); // Output: 10 20 30

console.log('Front element:', queue.front()); // Output: 10

queue.dequeue();
console.log('Queue after dequeue:');
queue.print(); // Output: 20 30

console.log('Is queue empty?', queue.isEmpty()); // Output: false

console.log('Queue size:', queue.size()); 