class Stack {
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if (this.isEmpty()){
            return 'Underflow'
        }
        return this.items.pop()
    }

    peek(){
        if (this.isEmpty()){
            return 'Stack is Empty'
        }
        return this.items[this.items.length -1]
    }

    print(){
        console.log(this.items.join(', '))
    }
}


let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack elements:");
stack.print(); 

console.log("Top element:", stack.peek()); 

stack.pop();
console.log("Stack after pop:");
stack.print(); 

console.log("Is stack empty?", stack.isEmpty()); 

console.log("Stack size:", stack.size()); 