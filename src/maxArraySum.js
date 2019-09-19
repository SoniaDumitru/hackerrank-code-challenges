// Given an array of integers, find the subset of non-adjacent elements with the maximum sum. Calculate the sum of that subset.

function maxSubsetSum(arr) {
    arr = arr.sort();
    let maxSum = 0;
    for (let i=0; i < arr.length; i++) {
        let sum = arr[i] + arr[i+2]
        let allSum = arr[arr.length-1] + arr[arr.length-2];
        if (sum >= maxSum) {
            maxSum = sum;
        } else if (allSum >= maxSum) {
            maxSum = allSum;
        }
    }
    return maxSum;
}
