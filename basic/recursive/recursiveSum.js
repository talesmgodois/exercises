function sum(a, i){
    if(!i) i = 0;
    if(i < a.length){
        return a[i] + sum(a, i + 1) ;
    }
    return 0;
}

console.log(sum([1,2,3,4,5, 5, 10]));




