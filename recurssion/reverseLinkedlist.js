function factorial(num) {
    console.log(num)
    if (num === 0 || num ==1) {
        return 1
    }else {
        
    
    return num * factorial(num-1)
    }
}
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reverseLinkedListRecursive(head) {
    // Base case: empty list or single node
    if (!head || !head.next) {
        return head;
    }

    // Recursively reverse the rest of the list
    let reversedHead = reverseLinkedListRecursive(head.next);

    // Reverse the links
    head.next.next = head;
    head.next = null;

    // Return the new head of the reversed list
    return reversedHead;
}

// Function to print the linked list
function printLinkedList(head) {
    let current = head;
    while (current) {
        process.stdout.write(current.val + " ");
        current = current.next;
    }
    process.stdout.write("\n");
}

// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original Linked List:");
printLinkedList(head);

// Reverse the linked list
head = reverseLinkedListRecursive(head);

console.log("Reversed Linked List:");
printLinkedList(head);

