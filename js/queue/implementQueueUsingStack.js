class MyQueue {
    constructor() {
        this.s1 = []
        this.s2 = []

    }
    enqueue(x) {

        this.s1.push(x)
    }
    dequeue() {
        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop())
            }
        }

        return this.s2.pop()
    }
    front() {
        if (this.s2.length === 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop())
            }
        }

        return this.s2[this.s2.length - 1]
    }
    empty() {
        return this.s1.length === 0 && this.s2.length === 0
    }
}




