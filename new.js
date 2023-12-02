class stack{
    constructor(){
        this.item=[];
    }
    push(element){
        this.item.push(element);
    }
    midDel(){
        if(this.item==null){
            return null;
        }
        let temp=[];
        let mid=Math.floor(this.item.length/2);
        for(let i=0;i<mid;i++){
            temp.push(this.item.pop())
        }
        this.item.pop();
        while(temp.length>0){
            this.item.push(temp.pop())
        }
        return this.item
    }
    print(){
        console.log(this.item);
    }
    
}
const addStack=new stack();
addStack.push(10);
addStack.push(20);
addStack.push(40);
addStack.push(50);
addStack.push(30);
addStack.midDel()
addStack.print();