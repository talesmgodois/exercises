/**
 * Created by talesmarinho on 30/07/18.
 */
function occurences(k, n) {

    let array = n.toString().split('');

    return occurencesInArray(k, array);

}

let occurencesInArray = (k, array, i)  => {
    if(!i) i = 0;

    let r = (k === +array[i]) ? 1 : 0 ;

    if(i === array.length - 1) return r;

    return r + occurencesInArray(k, array, i + 1);
};

console.log(occurences(5, 555));
console.log(occurences(5, 515));
console.log(occurences(5, -5123));
console.log(occurences(2, 762021192));