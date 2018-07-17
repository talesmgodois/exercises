
function minimumBribes(q) {
    let swaps = 0;
    let count = 0;
    for(let i=0; i< q.length; i++){
        let inSwap =0;
        if((q[i] -i) >= 4){
            return 'Too chaotic';
        }
        for(let j=i + 1; j< q.length && q[i] !== (i + 1); j++){
            count ++;
            if(q[i] > q[j]){
                swaps++;
                let aux = q[i];
                q[i] = q[j];
                q[j] = aux;
            }
        }
        console.log(count);
    }
    console.log('########RESULT######');
    return swaps;
}


// console.log(minimumBribes([2, 1, 5, 3, 4]));
// console.log(minimumBribes([2, 5, 1, 3, 4]));
//
// console.log(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]));
//
// console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]));
// console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]));
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));


// console.log(minimumBribes(makeIntArray()));
