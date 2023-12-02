class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class queue{
    constructor(){
        this.head=null;
        this.size=0
    }
    isEmpty(){
        return this.size===0;
    }
    getSize(){
        console.log(this.size)
    }
    enqueue(value){
        const newNode=new Node(value);
        if(this.isEmpty()){
            this.head=newNode;
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next;
            }
            prev.next=newNode;
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("its is empty")
        }else{
            this.head=this.head.next;
            this.size--
        }
    }
    midElement(){
        if(this.isEmpty()){
            console.log("the stack is empty")
        }
        let fast=this.head;
        let slow=this.head;
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next
        }
        console.log("middle element is = " + slow.value)
    }
    peek() {
        if (this.isEmpty()) {
          console.log("Stack is empty. Cannot peek.");
          return null;
        }
        console.log("peek elment is" + this.head.value);
      }
    
    
    display(){
        if(this.isEmpty()){
            console.log("this is empty")
        }else{
            let curr=this.head;
            while(curr!==null){
                console.log(curr.value);
                curr=curr.next;
            }
        }
    }
}
const Queue=new queue();
Queue.enqueue(10);
Queue.enqueue(20);
Queue.enqueue(30);
Queue.midElement()
Queue.getSize()
Queue.peek()
Queue.display()