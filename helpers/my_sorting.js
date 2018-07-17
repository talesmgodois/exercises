function tsort(array) {
    let swaps = 0;
    for(let i=0; i< array.length; i++){
        let inSwap =0;
        for(let j=i + 1; j< array.length; j++){
            if(array[i] > array[j]){
              swaps++;
                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
      }

      return array;
}

function tsortInsertion( array){
    let swaps = 0;
    for(let i=1; i< array.length; i++){
        let elem = array[i];
        let j = i;
        while(j > 0 && array[j -1] > elem){
            array[j] = array[j -1];
            j--;
            swaps++
        }
        array[j] = elem;
    }
    return swaps;
}

// console.log(tsortInsertion([5,3,6,1,4,10,5000,1,2,3,4,6,4]));
// console.log(tsort([5,3,6,1,4,10,5000,1,2,3,4,6,4]));
// console.log(tsortInsertion([2, 1, 5, 3, 4]));
console.log(tsortInsertion([2, 1, 5, 3, 4]));
console.log(tsortInsertion([2, 5, 1, 3, 4]));
