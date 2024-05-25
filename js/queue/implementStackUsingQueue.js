class MyStack {
    constructor() {
        this.q1 = []
        this.q2 = []
    }
    push(x) {
        while (this.q1.length !== 0) {
            this.q2.push(this.q1.shift())
        }
        this.q1.push(x)
        while (this.q2.length !== 0) {
            this.q1.push(this.q2.shift())
        }
    }
    pop() {
        return this.q1.shift()
    }
    peek() {
        return this.q1[0]
    }
    isEmpty() {
        return this.q1.length === 0
    }
    size() {
        return this.q1.length
    }
}






