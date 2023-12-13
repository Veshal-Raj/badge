class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Linkedlist{
    constructor(){
        this.head = null
        this.size = 0;
    }

    append(data){
        let newNode = new node(data)
        if (!this.head){
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next){
                 current = current.next;
            }
            current.next = newNode;
        }
        this.size++
    }

    prepand(data){
        let newNode = new node(data)
        if (!this.head){
            this.head = newNode;
        } else {
            let current = this.head;
            newNode.next = current;
            this.head = newNode;
            // while(current.next)
        }
        this.size++
    }
    

    insertAtBeginning(data){
        this.prepand(data)
    }
    
    insertAtEnd(data){
        this.append(data)
    }

    insertAtPosition(data, position) {
        if (position <0 || position>this.size){
            console.log('Invalid position')
            return 
        }

        if (position === 0){
            this.prepand(data)
        }else {
            let newNode = new node(data)
            let current = this.head;
            let count = 0;
             while( count < position -1){
                let current = current.next;
                count++
             }
             newNode.next = current.next;
             current.next = newNode;
        }
        this.size++

    }

    deleteFromBegin(){
        if (!this.head){
            console.log('nothing to delete')
            return;
        } else{
             this.head = this.head.next;
             this.size--
        } 
    }

    deleteFromEnd(){
        if (!this.head){
            console.log('nothing to delete')
            return
        }else{
            let current = this.head;
            while(current.next.next){
                current = current.next
            }
            current.next = null
        }
        this.size--
    }

    deleteFromPosition(position){
        if(!this.head){
            console.log('nothing to delete')
            return;
        } else{
            let current = this.head;
            let count = 0;
            while(count < position -1){
                current = current.next;
                count++
            }
            current.next = current.next.next
        }
        this.size--
    }

    traverse(){
        if (!this.head){
            console.log('nothing to show')
            return
        }else{
            let current = this.head;
            while(current){
                console.log(current.data)
                current = current.next
            }
        }
    }

}

let linkedlist = new Linkedlist()

linkedlist.append(1)
linkedlist.append(1)
linkedlist.append(1)
linkedlist.prepand(2)
linkedlist.prepand(0)
linkedlist.insertAtBeginning(99)
linkedlist.insertAtEnd(45)

linkedlist.traverse()
linkedlist.deleteFromBegin()
console.log('size --> ', linkedlist.size)

linkedlist.traverse()
linkedlist.deleteFromEnd()
console.log('size --> ', linkedlist.size)
linkedlist.deleteFromPosition()
console.log('size --> ', linkedlist.size)

linkedlist.traverse()
