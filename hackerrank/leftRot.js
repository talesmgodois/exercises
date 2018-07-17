function rotLeft(a, d) {
    function rotLeftByOne(arr) {
        arr.push(arr.shift());
        return a;
    }

    for(let i =0;i < d; i++){
      a = rotLeftByOne(a);
    }

    return a;
}

let $array= [ 1, 2, 3, 4, 5 ];
let d = 2;

console.log(rotLeft($array,d));
