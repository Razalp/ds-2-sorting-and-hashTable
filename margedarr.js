// function margeSort(arr){
//     if(arr.length<2){
//         return arr;
//     }
//     const mid=Math.floor(arr.length/2);
//     const leftArr=arr.slice(0,mid);
//     const rightArr=arr.slice(mid);
//     return marge(margeSort(leftArr),margeSort(rightArr));
// }
// function marge(leftArr,rightArr){
//     const sorted=[];
//     while(leftArr.length&&rightArr.length){
//         if(leftArr[0]<=rightArr[0]){
//             sorted.push(leftArr.shift());
//         }else{
//             sorted.push(rightArr.shift());
//         }
//     }
//     return [...sorted,...leftArr,...rightArr]
// }
// console.log(margeSort([7,6,4,3,2,-10,3,44]));
function margeSort(arr){
    if(arr.length<2){
        return arr;
    }
    let mid=Math.floor(arr.length/2)
    let leftArr=arr.slice(0,mid);
    let rightArr=arr.slice(mid);
    return marge(margeSort(leftArr),margeSort(rightArr))
}
function marge(leftArr,rightArr){
    const sorted=[];
    while(leftArr.length &&rightArr.length ){
        if(leftArr[0]<=rightArr[0]){
            sorted.push(leftArr.shift())
        }else{
            sorted.push(rightArr.shift());
        }
    }
    return [...sorted,...leftArr,...rightArr]
}
console.log(margeSort([1,2,3,4,32,1,2,45,32,2343,5231]))