// Given an array of strings, return another array containing all of its longest strings.

// #####EXAMPLE#####

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be

// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(inputArray) {
  let bucketOStrings = {};
  let maxStrLength = 0;
  for (var i = 0; i < inputArray.length; i++) {
    if (!bucketOStrings[inputArray[i].length]) {
      bucketOStrings[inputArray[i].length] = [inputArray[i]];
    } else {
      bucketOStrings[inputArray[i].length].push(inputArray[i]);
    }
    if (inputArray[i].length > maxStrLength) {
      maxStrLength = inputArray[i].length;
    }
  }
  return bucketOStrings[maxStrLength];
}
