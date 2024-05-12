class Listnode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next
    }
}

function addTwoNumbers(l1,l2) {
    let dummy = new Listnode(0);
    let current = dummy;
    let carry = 0;

    while(l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0

        const sum = val1 + val2 + carry
        carry = Math.floor(sum/10)

        current.next = new Listnode(sum%10)
        current = current.next

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next
    }
    return dummy.next
}

const l1 = new Listnode(2)
l1.next = new Listnode(4)
l1.next.next = new Listnode(6)


const l2 = new Listnode(1)
l2.next = new Listnode(3)
l2.next.next = new Listnode(5)


let result = addTwoNumbers(l1,l2)


while (result) {
    console.log(result.val)
    result = result.next
}