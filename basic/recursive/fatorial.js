function fatorial( number ){
  if(number < 2) return 1;
  return number * fatorial(number -1);
}

console.log(fatorial(1))
console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(7))
