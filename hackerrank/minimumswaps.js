function minimumSwaps(arr) {
    let swaps = 0;
    for(let i=0; i< arr.length; i++){
      console.log(arr);
        if(arr[i] !== (i + 1)){

            let aux =arr[arr[i] - 1];
            arr[arr[i] - 1] = arr[i];
            arr[i] = aux;
            swaps++;
        }

    }

    return arr;
}
// console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
console.log(minimumSwaps([4,3,1,2]));
