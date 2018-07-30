/**
 * Created by talesmarinho on 30/07/18.
 */
function invertArray( s_array, i ) {
    if(!i) i = 0;
    let middle = Math.floor(s_array.length /2);
    if(i >= middle){

        return s_array;
    }
    else{

        let aux = s_array[i];
        s_array[i] = s_array[s_array.length -1 -i];
        s_array[s_array.length -1 -i] = aux;
        return invertArray(s_array, i + 1)
    }
}

function generateRamdomArray( size ) {
    let a = [];

    for(let k = 0; k< size; k++){
        let i = Math.random();
        let j = Math.random();

        if (i > 0.5){
            a = a.concat(Math.floor(j* 100));
        } else {
            a = a.concat(Math.ceil(j*100));
        }

    }

    return a;
}
//
// console.log([1,2,3,4,5,6,7,8,9]);
// console.log(invertArray([1,2,3,4,5,6,7,8,9]));

let a = generateRamdomArray(100);

console.log(invertArray(a));

