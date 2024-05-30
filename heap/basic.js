class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Helper function to get the index of the parent node
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Helper function to get the index of the left child node
    leftChildIndex(index) {
        return 2 * index + 1;
    }

    // Helper function to get the index of the right child node
    rightChildIndex(index) {
        return 2 * index + 2;
    }

    // Helper function to swap two nodes
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    // Function to insert a new value into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // Function to maintain heap property after insertion
    heapifyUp(index) {
        let currentIndex = index;
        let parentIndex = this.parentIndex(currentIndex);

        while (currentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parentIndex(currentIndex);
        }
    }

    // Function to extract the minimum value (root) from the heap
    extractMin() {
        if (this.heap.length === 0) return null;

        if (this.heap.length === 1) return this.heap.pop();

        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return minValue;
    }

    // Function to maintain heap property after extraction
    heapifyDown(index) {
        let currentIndex = index;
        let leftChildIndex = this.leftChildIndex(currentIndex);
        let rightChildIndex = this.rightChildIndex(currentIndex);

        while (leftChildIndex < this.heap.length) {
            let smallerChildIndex = leftChildIndex;

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
                smallerChildIndex = rightChildIndex;
            }

            if (this.heap[currentIndex] <= this.heap[smallerChildIndex]) break;

            this.swap(currentIndex, smallerChildIndex);
            currentIndex = smallerChildIndex;
            leftChildIndex = this.leftChildIndex(currentIndex);
            rightChildIndex = this.rightChildIndex(currentIndex);
        }
    }

    // Function to get the minimum value without extracting it
    peek() {
        return this.heap.length === 0 ? null : this.heap[0];
    }
}

// Example usage:
const heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(3);
heap.insert(2);
heap.insert(7);

console.log(heap.extractMin());      // Output: 2
console.log(heap.extractMin());      // Output: 3
console.log(heap.peek());            // Output: 5
