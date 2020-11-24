// Given an array of integers, find the pair of adjacent elements that
// has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
  return Math.max(
    ...inputArray.slice(0, -1).map((n, i) => n * inputArray[i + 1])
  );
}
