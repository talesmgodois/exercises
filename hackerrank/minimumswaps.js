function minimumSwaps(arr) {
let swaps = 0;
  for(let i=0; i< arr.length; i++){
      if(i+1!== arr[i]){
        let t = i;
        while(arr[t]!== i+1){
          t++;
        }
        let temp = arr[t];
        arr[t] = arr[i];
        arr[i] = temp;
        swaps++;
      }
  }
  return swaps;

}
console.log(minimumSwaps([4,3,1,2]));
console.log(minimumSwaps([4,3,2,1]));
console.log(minimumSwaps([1, 5, 4, 3, 2]));
console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
console.log(minimumSwaps([2, 1, 3, 7, 4, 5, 6]));
console.log(minimumSwaps([3, 7, 6, 9, 1, 8, 10, 4, 2, 5]));
console.log(minimumSwaps(
  [
    2, 31, 1, 38, 29, 5, 44, 6, 12, 18,
    39, 9, 48, 49, 13, 11, 7, 27, 14,
    33, 50, 21, 46, 23, 15, 26, 8, 47,
    40, 3, 32, 22, 34, 42, 16, 41, 24,
    10, 4, 28, 36, 30, 37, 35, 20, 17,
    45, 43, 25, 19
]));




//
//[4,3,1,2]
//
//[2,1,3,4]
