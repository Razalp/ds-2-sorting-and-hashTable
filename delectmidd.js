function deleteMiddleElement(arr) {
    const arrSize = arr.length;
    const middleIndex = Math.floor((arrSize - 1) / 2);  
    if (arrSize % 2 === 0) {
      arr.splice(middleIndex, 1);
    } else {
      arr.splice(middleIndex, 1);
    }
    return arr;
  }
  console.log(deleteMiddleElement([1,2,3,4,5]))