/**
 * Created by talesmarinho on 30/07/18.
 */

function pow(k, n) {
    if (n <=0) return 1;

    return k * pow(k, n -1);

}

console.log(pow(5,0));
console.log(pow(5,1));
console.log(pow(5,2));
console.log(pow(5,5));
console.log(pow(2,10));