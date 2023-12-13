class node {
    constructor(data) {
        this.data = data;
        this.next = null;        
    }   
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    append(data) {
        let newNode = new node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    display() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let linkedlist = new LinkedList()

linkedlist.append(9)
linkedlist.append(8)
linkedlist.append(7)
linkedlist.append(6)
linkedlist.append(5)
linkedlist.append(4)
linkedlist.append(3)
linkedlist.append(2)
linkedlist.append(1)
linkedlist.append(0)

linkedlist.display()