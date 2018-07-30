/**
 * Created by talesmarinho on 30/07/18.
 */
function printFromZeroToN(N, k) {
    if(!k) k = 0;

    console.log(k);

    if(k !== N){
        printFromZeroToN(N, k +1);
    }
}

printFromZeroToN(10);