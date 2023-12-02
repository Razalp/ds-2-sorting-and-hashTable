class Node{
    constructor(value){
        this.value=value
        this.next=null;
    }
}
class stack{
    constructor(){
        this.top=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        console.log(this.size);
    }
    push(value){
    const newNode=new Node(value)
    if(this.isEmpty()){
        this.top=newNode;
    }else{
        newNode.next=this.top;
        this.top=newNode;
    }
    this.size++;
    }
    pop(){
        if(this.top===null){
            console.log("underflow")
        }else{
            this.top=this.top.next;
            this.size--;
        }

    }
    midElement(){
        if(this.isEmpty()){
            console.log("the stack is empty");
        }
        let fast=this.top;
        let slow=this.top;
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next
        }
        console.log("middle element is = " + slow.value);
    }
    peek() {
        if (this.isEmpty()) {
          console.log("Stack is empty. Cannot peek.");
          return null;
        }
        console.log("peek element is" + this.top.value);
      }
    
    display(){
        if(this.isEmpty()){ 
            console.log("this stack is empty");
        }else{
            let curr=this.top;
            while(curr!==null){
                console.log(curr.value);
                curr=curr.next;
            }
        }
    }
}
const addStack=new stack()
addStack.push(10);
addStack.push(15);
addStack.push(20);
addStack.peek();
addStack.display();
addStack.pop()
addStack.display();