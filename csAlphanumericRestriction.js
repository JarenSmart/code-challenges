// Create a function that returns True if the given string has any of the following:

// Only letters and no numbers.
// Only numbers and no letters.
// If a string has both numbers and letters or contains characters that don't fit into any category, return False.

// #####EXAMPLE#####

// csAlphanumericRestriction("Bold") ➞ True
// csAlphanumericRestriction("123454321") ➞ True
// csAlphanumericRestriction("H3LL0") ➞ False

function csAlphanumericRestriction(input_str) {
  var letters = /^[A-Za-z]+$/;
  var nums = /^[0-9]+$/;
  if (input_str.match(nums)) {
    return true;
  } else if (input_str.match(letters)) {
    return true;
  } else {
    return false;
  }
}
