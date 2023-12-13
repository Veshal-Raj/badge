class node {
    constructor(data) {
        this.data = data;
        this.next = null;        
    }   
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
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
        this.size++
    }

    insertAtBeginning(data) {
        let newNode = new node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++
    }

    insertAtEnd(data) {
        this.append(data)
    }

   insertAtPosition(data, position){
    if (position< 0 || position>this.size++){
        console.log('Invalid positon')
        return;
    }
    if (position === 0){
        this.insertAtBeginning(data)
    } else {
        let newNode = new node(data);
        let current = this.head;
        let count =0;
        while(count < position-1){
            current = current.next;
            count++
        }
        newNode.next = current.next;
        current.next = newNode;
    }
    this.size++
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
linkedlist.insertAtBeginning(12234)
console.log('size --> ',linkedlist.size)

linkedlist.insertAtEnd(99999)
linkedlist.insertAtPosition(7777777777777777, 10)

linkedlist.display()