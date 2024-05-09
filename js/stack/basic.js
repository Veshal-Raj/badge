// functions that stack can perform
// push(e), pop(), peek(), isEmpty(), size()
// Last in First out - LIFO

// basic implementation of stack

class Stack {
    constructor() {
        this.stack = []
    }

    peek() {
        if (this.isEmpty()) {
            return 'Stack is Empty'
        }
        
        return this.stack[this.size() - 1]
        
    }

    push(element) {
       return this.stack.push(element)
    }

    pop() {
        if (this.isEmpty()) {
            return 'Stack is Empty'
        }
       return this.stack.pop()
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.stack.length
    }

    printStack () {
        return this.stack
    }
}


const stack = new Stack()

stack.push(1)
stack.push(12)
stack.push(11)
stack.push(13)
stack.push(14)
stack.push(143)

console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.pop())
console.log(stack.printStack())