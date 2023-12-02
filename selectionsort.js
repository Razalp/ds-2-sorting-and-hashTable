function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }
  console.log(selectionSort([7, 6, 5, 4, 3, 2, 10, 1, 2, 3, 4 ,5, 6 , 7, 444 ,-1, 2, 3, 4]));