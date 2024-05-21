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

    // Helper function to check if a string is a palindrome
    isStringPalindrome(str) {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    // Main function to check if the linked list and its strings are palindromes
    isPalindrome() {
        if (!this.head || !this.head.next) return true;

        // Step 1: Check if each node's value is a palindrome
        let current = this.head;
        while (current) {
            if (!this.isStringPalindrome(current.value)) {
                return false;
            }
            current = current.next;
        }

        // Step 2: Use the fast and slow pointer technique to find the middle of the linked list
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 3: Reverse the second half of the linked list
        let prev = null;
        let secondHalf = slow;
        while (secondHalf) {
            let nextNode = secondHalf.next;
            secondHalf.next = prev;
            prev = secondHalf;
            secondHalf = nextNode;
        }
        let secondHalfHead = prev;

        // Step 4: Compare the first half and the reversed second half of the list
        let firstHalfHead = this.head;
        while (secondHalfHead) {
            if (firstHalfHead.value !== secondHalfHead.value) {
                return false;
            }
            firstHalfHead = firstHalfHead.next;
            secondHalfHead = secondHalfHead.next;
        }

        // The list and each node's value are palindromes
        return true;
    }
}

// Example usage
const list = new LinkedList();
list.add('madam');
list.add('racecar');
list.add('level');
list.add('racecar');
list.add('madam');

console.log(list.isPalindrome()); // Outputs: true

const list2 = new LinkedList();
list2.add('hello');
list2.add('world');

console.log(list2.isPalindrome()); // Outputs: false
