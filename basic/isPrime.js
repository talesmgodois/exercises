function isPrime(n) {
    for(let i=(n -1); i> 1; i--){
        if(n%i === 0){
          return false;
        }
    }
    return true;
}


console.log(isPrime(5)); //true
console.log(isPrime(6)); //false
console.log(isPrime(7)); //true
console.log(isPrime(8)); //false
console.log(isPrime(9)); //false
console.log(isPrime(10));//false
