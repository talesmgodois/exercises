/**
 * Created by talesmarinho on 30/07/18.
 */

function sum(n) {
    if(n===0) return 0;
    return n + sum(n - 1);
}

console.log(sum(3));
console.log(sum(4));
console.log(sum(5));