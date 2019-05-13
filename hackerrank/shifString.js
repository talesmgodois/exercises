function getShiftedString(s, leftShifts, rightShifts) {
  const getLeftShift = (s, shifts) => {
    let str_arr = s.split("");
    let first = str_arr.shift();
    str_arr.push(first);
    return str_arr.join("");
  };

  const getRightShift = (s, shifts) => {
    let str_arr = s.split("");
    let last = str_arr.pop();
    str_arr.unshift(last);
    return str_arr.join("");
  };

  const shifts = rightShifts - leftShifts;
  if (shifts > 0) {
    let str = s;
    for (let i = 0; i < shifts; i++) {
      str = getRightShift(str);
    }
    return str;
  }
  if (shifts < 0) {
    let str = s;
    const _shifts = shifts * -1;
    for (let i = 0; i < _shifts; i++) {
      str = getLeftShift(str);
    }
    return str;
  }

  return s;
}
console.log(
  getShiftedString(
    "abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde",
    1000,
    1
  )
);
console.log(getShiftedString("abcde", 1, 2));
console.log(getShiftedString("abcde", 1, 3));
console.log(getShiftedString("abcde", 3, 3));
console.log(getShiftedString("abcde", 4, 3));
