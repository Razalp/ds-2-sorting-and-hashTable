function insertion(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i];
        let j=i;
            while(j>0 && temp < arr[j - 1]){
                arr[j]=arr[j-1]
                j--;
            }
            arr[j]=temp
        }
    return arr
}
console.log(insertion([7,6,5,4,3,2,-1,2,3,4]));
