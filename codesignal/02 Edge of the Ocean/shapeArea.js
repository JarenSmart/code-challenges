// below we will define an 'n'-intersting polygon. Your task is to find the area
// of a polygon for a given 'n'.

// A '1'-interesting polygon is just a square with a side of length '1'.
// An 'n'-interesting polygon is obtained by taking the 'n-1'-interesting polygon
// and appending '1'-interesting polygons to its rim, side by side.

function shapeArea(n) {
  initPoly = 1;
  return initPoly + n * ((n - 1) * 2);
}
