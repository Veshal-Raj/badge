class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    addFirst(data) {
        let newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            return
        }

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
        while(current.next){
            current = current.next

        }
        current.next = newNode
    }

    addAt(index, data) {

        if (index<0 || index>this.size()) {
            console.log('invalid index');
            return
        }
        let newNode = new Node(data)
        if (index ===0) {
            newNode.next = this.head
            this.head = newNode
            return
        }
        let current = this.head
        for (let i=0; i<index -1; i++) {
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode
    }

    removeFirst() {
        if (!this.head) {
            return
        }
        this.head = this.head.next
    }

    removeLast() {
        if (!this.head) {
            return
        }
        if (!this.head.next) {
            this.head = null
            return
        }
        let current = this.head
        while(current.next.next) {
            current = current.next
        }

        current.next = null

    }

    removeAt(index) {
        if(index<0 || index>this.size()){
            console.log('invalid index')
            return
        }
        if (!this.head){
            return
        }
        if (index ===0) {
            this.removeFirst()
            return
        }
        let current = this.head 
        for (let i=0; i<index-1; i++) {
            current = current.next
        }
        if (current.next) {

            current.next = current.next.next
        }
    }



    size() {
        let current = this.head
        let count = 0
        while(current) {
            count++
            current = current.next
        }
        return count
    }

    print() {
        if (!this.head) {
            return
        }
        let current = this.head
        while(current) {
            console.log(current.data)
            current = current.next
        }
    }
}



let li = new LinkedList() 

li.addFirst(1)
li.addFirst(2)
li.addLast(3)
li.addAt(2,5)
li.removeAt(0)
li.print()