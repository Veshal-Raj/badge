class StackUsingQueues {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    // Push operation: O(1)
    push(item) {
      this.queue1.push(item);
    }
  
    // Pop operation: O(n)
    pop() {
      if (this.isEmpty()) {
        return null; // Stack is empty
      }
  
      // Move all elements from queue1 to queue2 except the last one
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
  
      // The last element in queue1 is the one to be removed (popped)
      const poppedItem = this.queue1.shift();
  
      // Swap the names of queue1 and queue2 to make queue1 the primary queue
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
  
      return poppedItem;
    }
  
    // Peek operation: O(n)
    peek() {
      if (this.isEmpty()) {
        return null; // Stack is empty
      }
  
      // Move all elements from queue1 to queue2 except the last one
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
  
      // The last element in queue1 is the top of the stack
      const topItem = this.queue1[0];
  
      // Move the top element back to queue1
      this.queue2.push(this.queue1.shift());
  
      // Swap the names of queue1 and queue2 to make queue1 the primary queue
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
  
      return topItem;
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.queue1.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.queue1.length;
    }
  }
  
  // Example usage:
  const stack = new StackUsingQueues();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log(stack.pop()); // Output: 3
  console.log(stack.pop()); // Output: 2
  console.log(stack.peek()); // Output: 1
  console.log(stack.size()); // Output: 1
  