// Given two strings, find the number of common characters between them.

// #####EXAMPLE#####

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// ########################################

function commonCharacterCount(s1, s2) {
  let splitS1 = s1.split("");
  count = 0;
  while (splitS1.length) {
    let poppedArr = splitS1.pop();
    if (s2.includes(poppedArr)) {
      count++;
      s2 = s2.replace(poppedArr, "");
    }
  }
  return count;
}
// let splitS1 = s1.split('');
// let commonChars = {};
// let count = 0;
// for(let i = 0;i < splitS1.length; i++){
//     for(let j = i + 1;j <= splitS1.length; j++){
//         let joinedArr = splitS1.slice(i,j).join('');
//         if(s2.includes(joinedArr)&&!commonChars[joinedArr]){
//         commonChars[joinedArr] = true;
//         count++;
//         }
//     }
// }
// return count;

// }
