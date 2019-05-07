/**
 * Created by talesmarinho on 30/07/18.
 */
function mdc(x, y) {
    if(y === 0){
        return x;
    }else {
        return mdc(y, x%y);
    }
}

console.log(mdc(2,3));
console.log(mdc(12,9));
console.log(mdc(0,0));
console.log(mdc(0,5));
console.log(mdc(5,0));