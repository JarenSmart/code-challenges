//OPTION 1
function checkPalindrome(inputStr) {
  // Step 1. Lowercase the string and use the RegEx to remove unwanted characters from it
  // \W removes all non-alphanumeric characters:
  // \W matches any non-word character
  // \W is equivalent to [^A-Za-z0–9_]
  // \W matches anything that is not enclosed in the brackets
  var removeNonAlphas = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  // transform string to all lowercase letters and remove non-alphanumeric characters and replace them with a combined string
  // i.e. --> inputStr.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
  var lowRegexStr = inputStr.toLowerCase().replace(removeNonAlphas, "");
  var reverseStr = lowRegexStr.split("").reverse().join("");
  return reverseStr === lowRegexStr;
}

//OPTION 2
function checkPalindrome2(inputStr) {
  var removeNonAlphas = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  inputStr = inputStr.toLowerCase().replace(removeNonAlphas, "");
  // Create for loop
  var len = inputStr.length;

  for (var i = 0; i < len / 2; i++) {
    if (inputStr[i] !== inputStr[len - 1 - i])
      // As long as the characters from each part match, the for loop will continue
      return false; // When the characters don't match anymore, false is returned and we exit the for loop
  }
  return true;
}

checkPalindrome("A man, a plan, a canal. Panama");
checkPalindrome2("A man, a plan, a canal. Panama");
