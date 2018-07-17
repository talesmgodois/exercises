function hourglassSum(arr) {
  function sumArray( array ) {
      return array.reduce((prev,curr) => prev + curr, 0)
  }

  function getHourGlasses(arr) {
    let hourGlasses = [];
    let len = arr.length - 2;

    for(let i=0;i<len ;i++){
        for(let j=0;j < len;j++){
          hourGlass = [
              // Primeira linha
              arr[i][j],
              arr[i][j + 1],
              arr[i][j + 2],
              //Centro
              arr[i +1][j +1],

              //Ultima Linha
              arr[i +2][j],
              arr[i +2][j + 1],
              arr[i+ 2][j + 2]
          ];
          hourGlasses.push(hourGlass);
        }
    }

    return hourGlasses;
  };

  let hourGlasses = getHourGlasses(arr);
  let eachSum = hourGlasses.map(( hglass ) => sumArray(hglass));
  return Math.max.apply(null, eachSum);
}

let _array = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
]


let $array = [
  [-9, -9, -9,  1, 1, 1],
  [ 0, -9,  0,  4, 3, 2],
  [-9, -9, -9,  1, 2, 3],
  [ 0,  0,  8,  6, 6, 0],
  [ 0,  0,  0, -2, 0, 0],
  [ 0,  0,  1,  2, 4, 0]
]
console.log(hourglassSum($array))
