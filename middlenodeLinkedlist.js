class node {
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class Linkedlist {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(data){
        let newNode = new node(data)
        if (!this.head){
            this.head = newNode;
        } else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++
    }

    findMiddle(){
        if (!this.head){
            console.log('no node present')
            return;
        }
        let slow = this.head;
        let fast = this.head;
         
        while(fast&& fast.next){
            slow = slow.next;
            fast = fast.next.next
        }

        return slow? slow.data: null;

    }
}


let linkedlist = new Linkedlist()

linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(3)
linkedlist.append(4)
linkedlist.append(5)
linkedlist.append(6)
linkedlist.append(7)
linkedlist.append(8)
linkedlist.append(9)
linkedlist.append(10)

console.log('middle node -->', linkedlist.findMiddle())