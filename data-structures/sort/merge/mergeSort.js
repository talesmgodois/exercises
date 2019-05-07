/**
 * Created by talesmarinho on 25/08/18.
 */


export function getRadomArray(size) {
    let array = [];

    for(let i = 0; i< size; i++){
        const n = Math.random();
        array = array.concat(Math.floor(n * size));
    }

    return array;

}

let mergeSort = (array) => {
    if(array.length === 1) return array;

    const middle = Math.floor(array.length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));

};


let merge = (left, right) => {
    let lIndex = 0, rIndex = 0, temp = [], lenLeft = left.length, lenRight =right.length;

    while(lIndex < lenLeft && rIndex < lenRight){
        if(left[lIndex] < right[rIndex] ) {
            temp = temp.concat(left[lIndex]);
            lIndex++;
        } else {
            temp = temp.concat(right[rIndex]);
            rIndex++;
        }
    }

    return temp.concat(left.slice(lIndex)).concat(right.slice(rIndex));

};



console.log('SIMPLE TEST');
console.log(mergeSort([5,3, 2,2,10,7,4, 1]));

console.log('500 TEST');
console.log(mergeSort(getRadomArray(500)));

console.log('10000 TEST');
console.log(mergeSort(getRadomArray(10000)));


