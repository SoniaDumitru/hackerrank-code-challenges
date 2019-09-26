// Check if an array of numbers has any duplicate values, and show those duplicates values in an array.

let arr = [1,2,3,4,5,4,5];
function showDuplicates(arr) {
  let duplicates = [];
  let obj = {};
  for (let i=0; i<arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    }
    else {
      duplicates.push(arr[i]);
    }
  }
  return duplicates;
}
showDuplicates(arr);
// => result: [ 4, 5 ]
