// You are given an array of n integers, and a positive integer, k. Find and print the number of  pairs where i<j and  arr[i]+arr[j] is divisible by k.

let k = 5;
let arr = [1,4,5,5]
let n = 4;
function divisibleSumPairs(n, k, arr) {
  let count = 0;
  for(let i=0; i<n; i++){
        for(let j=1;j<n;j++){
            if (i < j){
            sum = arr[i] + arr[j];
            if (sum % k == 0){
                count++;
            }}
        }
    }
    return count;
}
// divisibleSumPairs(n, k, arr) => result: 2
