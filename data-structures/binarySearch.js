/**
 * Created by talesmarinho on 28/08/18.
 */



function getRadomArray(size) {
    let array = [];

    for(let i = 0; i< size; i++){
        const n = Math.random();
        array = array.concat(Math.floor(n * size));
    }

    return array;

}

let binarySearch = function (item, array) {
    let middle = Math.floor(array.length/2);

    if(array[middle] === item){
        return true;
    }else   if(array.length === 1){
        return false;
    }else if(array[middle] > item){
        return binarySearch(item,array.slice(0,middle));
    }else {
        return binarySearch(item,array.slice(middle, array.length));
    }
};


// const array = getRadomArray(10).sort((a,b) => a-b);
const array = [ 0, 0, 1, 3, 4, 5, 6, 7, 8, 9 ];
console.log(array);
console.log(binarySearch(30,array));
console.log(binarySearch(3,array));
console.log(binarySearch(5,array));
console.log(binarySearch(10,array));
console.log(binarySearch(2,array));