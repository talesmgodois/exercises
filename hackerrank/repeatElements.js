function starsAndBars(strToEvaluate, startIndex, endIndex) {
  // Write your code here

  return startIndex.map((item, index) => {
    return getNumberStartAndBars(strToEvaluate, item, endIndex[index]);
  });
}

function getNumberStartAndBars(str, startIndex, endIndex) {
  const sIdx = startIndex - 1;
  const eIdx = endIndex - 1;
  let current = "";
  let count = 0;

  for (let i = sIdx; i <= eIdx; i++) {
    current += str[i];
    if (current === "*" || current === "|**") {
      current = "";
    }

    if (current === "||") {
      current = str[i];
    }

    if (current === "|*|") {
      current = str[i];
      count++;
    }
  }
  return count;
}

// console.log(starsAndBars("|||||*|||||||", [1], [9]));
console.log(starsAndBars("|||||*|*|*||****|||**||", [1, 1], [9, 22]));
