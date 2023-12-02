// class Stack {
//     constructor() {
//       this.item = [];
//     }
//     push(elements) {
//       this.item.push(elements);
//     }
//     pop() {
//       return this.item.pop();
//     }
//     peek() {
//       return this.item[this.item.length - 1];
//     }
//     isEmpty() {
//       return this.item.length === 0;
//     }
//     size() {
//       return this.item.length;
//     }
//     deleteMid() {
//         if (this.isEmpty()) {
//             console.log("Stack is empty. Cannot delete middle element.");
//             return null;
//           }
      
//           const temp = [];
//           const middleValue = Math.floor(this.item.length / 2);
//           for (let i = 0; i < middleValue; i++) {
//             temp.push(this.item.pop());
//           }
//           this.item.pop();
//           while (temp.length > 0) {
//             this.item.push(temp.pop());
//           }
//           return this.item;
//         }
//     print() {
//       console.log(this.item.join(','));
//     }
//   }
//   const stack = new Stack();
  
//   stack.push(5);
//   stack.push(2);
//   stack.push(3);
//   stack.push(4);
//   stack.push(1);
//   stack.deleteMid()
//   stack.print();
class stack{
  constructor(){
    this.item=[]
  }
  push(value){
    this.item.push(value);
  }
  pop(){
    return this.item.pop()
  }
  peek(){
    return this.item[this.item.length-1]
  }
  isEmpty(){
    return this.item.length===0
  }
  getSize(){
    return this.item.length;
  }
  midDel(){
    if(this.item==null){
      console.log("the stack is empty")
    }
    let temp=[]
    let mid=Math.floor(this.item.length/2)
    for(let i=0;i<mid;i++){
      temp.push(this.item.pop())
    }
    this.item.pop();
    while(temp>0){
      this.item.push(temp.pop())
    }
    return this.item;
  }
  print(){
    console.log(this.item.join(','))
  }
}
const newStack=new stack();
newStack.push(10)
newStack.push(10)
newStack.push(10)
newStack.push(10)
newStack.pop()
newStack.midDel()
newStack.print()