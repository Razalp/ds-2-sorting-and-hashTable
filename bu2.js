function buSort(arr){
    let flag;
    for(i=0;i<arr.length;i++){
        flag=false
        for(j=0;j<=arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];//swaping
                flag=true;
            }
        }
        if(flag===false){
            break;
        }
    }
    return arr;
}
console.log(buSort([1,2,7,5,4,-1,-6,3]))



