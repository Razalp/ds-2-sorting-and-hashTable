class Stack {
    constructor() {
      this.items = [];
    }
    isEmpty() {
      return this.items.length === 0;
    } 
    push(value) {
      this.items.push(value);
    }
    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty. Cannot pop.");
        return;
      }
      return this.items.pop();
    }
    deleteMiddle() {
      if (this.isEmpty()) {
        console.log("Stack is empty. Cannot delete middle element.");
        return;
      }
      const middleIndex = Math.floor(this.items.length / 2);
    }
  }
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  
  console.log("Original Stack:");
  console.log(stack.items);
  
  stack.deleteMiddle();
  
  console.log("Stack after deleting middle element:");
  console.log(stack.items);