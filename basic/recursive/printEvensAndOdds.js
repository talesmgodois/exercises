/**
 * Created by talesmarinho on 30/07/18.
 */


function printEvens( N ) {

    if(N >= 0){
        if(N % 2 === 0 ){
            console.log(N);

        }
        printEvens(N - 1);
    }

}

function printOdds( N ) {

    if(N >= 0){
        if(N % 2 !== 0 ){
            console.log(N);

        }
        printOdds(N - 1);
    }

}



printEvens(10);
printOdds(10);
