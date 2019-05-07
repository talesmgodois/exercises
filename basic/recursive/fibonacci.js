function fibo(n){
    if(n===0) return 0;
    if(n===1) return 1;

    return fibo(n -1) + fibo(n -2);
}

console.log(fibo(0));
console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(4));
console.log(fibo(5));
console.log(fibo(6));
console.log(fibo(7));
console.log(fibo(8));
console.log(fibo(9));
console.log(fibo(10));
