class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Get parent index of a node
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Get left child index of a node
    getLeftChildIndex(index) {
        return index * 2 + 1;
    }

    // Get right child index of a node
    getRightChildIndex(index) {
        return index * 2 + 2;
    }

    // Swap two elements in the heap
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    // Heapify up
    heapifyUp(index) {
        let currentIndex = index;
        let parentIndex = this.getParentIndex(currentIndex);
        while (currentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
    }

    // Heapify down
    heapifyDown(index) {
        let currentIndex = index;
        let leftChildIndex = this.getLeftChildIndex(currentIndex);
        let rightChildIndex = this.getRightChildIndex(currentIndex);
        let smallestIndex = currentIndex;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = rightChildIndex;
        }

        if (smallestIndex !== currentIndex) {
            this.swap(currentIndex, smallestIndex);
            this.heapifyDown(smallestIndex);
        }
    }

    // Insert a value into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // Remove and return the minimum value from the heap
    removeMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    // Get the minimum value from the heap without removing it
    peekMin() {
        return this.heap.length === 0 ? null : this.heap[0];
    }

    // Get the size of the heap
    size() {
        return this.heap.length;
    }

    // Check if the heap is empty
    isEmpty() {
        return this.heap.length === 0;
    }
}

// Example usage:
let heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(20);
heap.insert(2);
heap.insert(15);

console.log("Heap size:", heap.size()); // Output: 5
console.log("Min value:", heap.peekMin()); // Output: 2

console.log("Removing min value:", heap.removeMin()); // Output: 2

console.log("Heap size after removal:", heap.size()); // Output: 4
console.log("Min value after removal:", heap.peekMin()); // Output: 5
