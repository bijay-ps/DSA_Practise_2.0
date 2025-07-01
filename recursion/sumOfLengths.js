function sumOfLengths(strArr) {
  if (strArr.length === 0) return 0;

  return strArr[0].length + sumOfLengths(strArr.slice(1));
}

console.log(sumOfLengths(["bike", "at", "pencils", "phone"]));
