class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    isPalindrome() {
        if (!this.head || !this.head.next) return true;

        // Step 1: Find the middle of the linked list
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse the second half of the linked list
        let prev = null;
        let current = slow;
        while (current) {
            let nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        let secondHalfHead = prev;

        // Step 3: Compare the first half and the reversed second half
        let firstHalfHead = this.head;
        while (secondHalfHead) {
            if (firstHalfHead.value !== secondHalfHead.value) {
                return false;
            }
            firstHalfHead = firstHalfHead.next;
            secondHalfHead = secondHalfHead.next;
        }

        // The list is a palindrome
        return true;
    }
}

// Example usage
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(2);
list.add(1);

console.log(list.isPalindrome()); // Outputs: true

const list2 = new LinkedList();
list2.add(1);
list2.add(2);

console.log(list2.isPalindrome()); // Outputs: false
