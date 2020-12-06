// Given an array of integers, return the sum of all the positive integers in the array.

// #####EXAMPLE#####

// csSumOfPositive([1, 2, 3, -4, 5]) -> 1 + 2 + 3 + 5 = 11
// csSumOfPositive([-3, -2, -1, 0, 1]) -> 1
// csSumOfPositive([-3, -2]) -> 0

function csSumOfPositive(input_arr) {
  sum = 0;
  for (var i = 0; i < input_arr.length; i++) {
    if (input_arr[i] < 0) {
      input_arr[i] = 0;
    } else {
      sum += input_arr[i];
    }
  }
  return sum;
}
