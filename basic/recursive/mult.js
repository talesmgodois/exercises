/**
 * Created by talesmarinho on 30/07/18.
 */

function mult(a, b) {
    if(b === 0 || a === 0) return 0;

    return a + mult(a, b -1);
}

console.log(mult(2,3));
console.log(mult(2,2));
console.log(mult(10,10));
console.log(mult(5,10));
console.log(mult(5,0));
console.log(mult(5,1));