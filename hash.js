class hashTable{
    constructor(size){
        this.hashTable=new Array(size);
        this.size=size;
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total=total+key.charCodeAt(i);
        }
        return total % this.size;
    }
    set(key , value){
        const index=this.hash(key);
        this.hashTable[index] = value;
    }
    get(key){
        const index=this.hash(key)
        return this.hashTable[index];
    }
    remove(key){    
        const index=this.hash(key)
        this.hashTable[index]=undefined;
    }
    display(){
        for (let i = 0; i < this.hashTable.length; i++) {
            if (this.hashTable[i]){
                console.log(i,this.hashTable[i])
            }
        }
    }
}
const newTable=new hashTable(10);
newTable.set("name","razal");
newTable.set("job","mern stack developer");
newTable.set("salary","12 LPA");
newTable.remove("job");
newTable.display()
newTable.get("job");
newTable.get("salary");
newTable.get("name");
newTable.display()
    