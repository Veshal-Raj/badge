// Linkedlist

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


class linkedList {
    constructor() {
        this.head = null
    }

    addFirst(data) {
        let newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }

    addLast(data) {
        let newNode = new Node(data) 
        if (!this.head) {
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next) {
            current = current.next
        }
        current.next = newNode
        
    }

    addAt(data, index) {
        if (index<0 || index>this.size()) {
            console.log('invalid index')
            return
        }
        let newNode = new Node(data)
        if (index === 0) {
            this.addFirst(data)
        }
        let current = this.head
        
        for (let i=0; i<index-1; i++) {
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode
    }

    size() {
        let count = 0
        let current = this.head
        while(current.next) {
            count++
            current = current.next
        }
        return count
    }

    removeFromTop () {
        if (!this.head) {
            return
        }
        this.head = this.head.next
    }

    removeLast() {
        if(!this.head) {
            return
        }
        let current = this.head
        while(current.next.next) {
            current = current.next
        }
        current.next = null
    }

    removeAt(index) {
        if (index <0 || index>this.size() || !this.head) {
            return
        }
        if (index ===0) this.removeFromTop()
        let current = this.head
        for (let i=0; i<index -1 ; i++) {
            current = current.next
        }
        if (current.next) {
            current.next = current.next.next
        }
    }
   
    print() {
        let current =  this.head;

        while(current) {
            console.log(current.data)
            current = current.next
        }
    }
}

const linkedlist = new linkedList()

linkedlist.addFirst(1)
linkedlist.addFirst(2)
linkedlist.addFirst(3)
linkedlist.addFirst(4)
linkedlist.addFirst(5)
linkedlist.addAt(8,3)
linkedlist.print()