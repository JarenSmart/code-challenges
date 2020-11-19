// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// ######EXAMPLE#####

// For

// picture = ["abc",
//            "ded"]
// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

function addBorder(picture) {
  let coveringWalls = picture[0].length + 2;
  let wall = "";

  for (var i = 0; i < coveringWalls; i++) {
    wall = wall.concat("*");
  }

  picture.unshift(wall);
  picture.push(wall);

  for (var j = 1; j < picture.length - 1; j++) {
    picture[j] = "*".concat(picture[j], "*");
  }

  return picture;
}
