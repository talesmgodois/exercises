var fs = require('fs');
const file = '/home/tales/Documents/Projetos/Extra/algo/feuler/numbers.txt';


function first50Digit() 
{
    readTextFile(file).then ( ( resp ) => {

        _sum = sum(resp.replace(/\D/g,''));
        console.log(resp);
        console.log(_sum);
        console.log(r);
        return r;

    });
};

function sum(n) {
    let r = 0;

    for(i=0; i < n.length; i++){
        if (i > 2000){
            console.log(r);
        }
        r+= parseInt(n[i], 10);
    }
    return r;
};

function readTextFile(_file)
{
    return new Promise (function(resolve, reject){
        return fs.readFile(_file, 'utf8', function(err, data) {  
            if (err) throw err;
            resolve(data);
        });
    }) 
}

console.log(first50Digit());
