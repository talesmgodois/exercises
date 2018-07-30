function invert(number){
    array = (''+number).split('');
    return +invertArray(array).join("")
}

function invertArray( s_array, i ) {
    if(!i) i = 0;
    let middle = Math.floor(s_array.length /2);
    if(i >= middle){

      return s_array;
    }
    else{

        let aux = s_array[i];
        s_array[i] = s_array[array.length -1 -i];
        s_array[array.length -1 -i] = aux;
        return invertArray(s_array, i + 1)
    }
}

console.log(invert(12345));
