class table{
    constructor(size){
        this.table=new Array(size);
        this.size=size;
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
             total = total + key.charCodeAt(i);
        }
        return total % this.size;
    }
    Set(key ,value){
        const index=this.hash(key);
        this.table[index]=value
    }
    Get(key){
        const index=this.hash(key);
        return this.table[index];
    }
    Remove(key){
        const index=this.hash(key);
        this.table[index]=undefined;
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}
const tb=new table(10);
tb.Set("name","razal")
tb.display();