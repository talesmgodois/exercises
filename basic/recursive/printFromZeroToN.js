/**
 * Created by talesmarinho on 30/07/18.
 */
// function printFromZeroToN(N, k) {
//     if(!k) k = 0;
//
//     console.log(k);
//
//     if(k !== N){
//         printFromZeroToN(N, k +1);
//     }
// }


function printFromZeroToN( N) {

    if(N > 0){
        printFromZeroToN(N - 1);
    }
    console.log(N);

}

function printFromNToZero( N ) {

    if(N > 0){
        console.log(N);
        printFromNToZero(N - 1);
    }

}

printFromZeroToN(10);
printFromNToZero(10);