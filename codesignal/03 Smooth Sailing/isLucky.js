// Ticket numbers usually consist of an even number of digits. A ticket number is considered
// lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// #####EXAMPLE#####

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.

function isLucky(n) {
  var nString = n.toString();
  var sum1 = 0;
  var sum2 = 0;
  for (var i = 0; i < nString.length / 2; i++) {
    sum1 += parseInt(nString[i]);
    sum2 += parseInt(nString[nString.length - i - 1]);
  }
  return sum1 == sum2;
}
