let arr = [2,3,5]
function div(arr) {
  for (let i=0; i<arr.length;i++) {
    if (arr[i] % 3 === 0) {
      arr[i] += 2;
    } else if (arr[i] % 2 === 0) {
      Math.sqrt(arr[i]);
    }
  }
  return arr;
}

// div(arr) => result: [ 2, 5, 5 ]
