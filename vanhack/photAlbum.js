function photoAlbum(index, identity) {
  const getMovedArray = (value, position, array, identity) => {
    const aux = [...array];
    aux[position] = value;
    for (let i = position + 1; i < array.length; i++) {
      aux[i] = identity[i - 1];
    }
    return aux;
  };

  let _array = new Array(index.length);
  for (let i = 0; i < index.length; i++) {
    const value = identity[i];
    const position = index[i];
    _array = getMovedArray(value, position, _array, identity);
  }

  return _array;
}

console.log(photoAlbum([0, 1, 1], [0, 1, 2]));
