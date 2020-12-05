// Given a string, return a new string with all the vowels removed.

// #####EXAMPLE#####

// csRemoveTheVowels("Lambda School is awesome!") -> "Lmbd Schl s wsm!"

function csRemoveTheVowels(input_str) {
  return input_str.replace(/[aeiou]/gi, "");
  // vowels = ["a", "e", "i", "o", "u"]
  // if (input_str.includes(vowels)){
  //     input_str.replace("")
  // }
  return input_str;
}
