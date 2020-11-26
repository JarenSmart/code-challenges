// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// #####EXAMPLE#####

// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

function reverseInParentheses(inputString) {
  while (inputString.indexOf(")", 0) != -1) {
    var c = inputString.indexOf(")", 0);
    var a = inputString.lastIndexOf("(", c);
    var b = inputString
      .slice(a + 1, c)
      .split("")
      .reverse()
      .join("");
    inputString = inputString.slice(0, a) + b + inputString.slice(c + 1);
  }
  return inputString;
}
