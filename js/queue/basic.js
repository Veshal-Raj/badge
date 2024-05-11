class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(element) {
       return this.queue.push(element)
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'underflow'
        }
        return this.queue.shift()
    }

    front() {
        if (this.isEmpty()) {
            return 'Underflow'
        }
        return this.queue[0]
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.queue.length
    }

    printQueue() {
        let queueStr = ''
        for (let i=0; i<this.size(); i++) {
            queueStr += this.queue[i] + ' '
        }
        console.log( queueStr)
    }
}


let q1 = new Queue()

q1.enqueue(1)
q1.enqueue(61)
q1.enqueue(11)
q1.enqueue(12)
q1.enqueue(2)
q1.enqueue(9)
q1.printQueue()
q1.dequeue()
q1.dequeue()
q1.dequeue()
q1.printQueue()
console.log(q1.front())