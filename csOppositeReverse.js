// Write a function that takes a string as input and returns that string in reverse order,
// with the opposite casing for each character within the string.

// #####EXAMPLE#####

// csOppositeReverse("Hello World") ➞ "DLROw OLLEh"
// csOppositeReverse("ReVeRsE") ➞ "eSrEvEr"
// csOppositeReverse("Radar") ➞ "RADAr"

function csOppositeReverse(txt) {
  if (txt === "") {
    return "";
  }
  var reversed = "";
  for (var i = 0; i < txt.length; i++) {
    if (txt[i] === txt[i].toUpperCase()) {
      reversed += txt[i].toLowerCase();
    } else {
      reversed += txt[i].toUpperCase();
    }
    finalResult = reversed.split("").reverse().join("");
  }
  return finalResult;
}
