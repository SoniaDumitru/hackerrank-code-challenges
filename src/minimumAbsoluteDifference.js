// Given an array of integers, find and print the minimum absolute difference between any two elements in the array.
// For example if arr = [-2, 2, 4] we can create 3 pairs of numbers: [-2,2], [-2,4] and [2,4].
// The absolute difference for these pairs are |(-2) -2| = 4, |(-2) -4| = 6 and \2 - 4\ = 2. The minimum absolute difference is 2.

function minimumAbsoluteDifference(arr) {
    //sorting the numbers in ascending order
    arr = arr.sort((a,b) => a-b);
    let minDiff = arr[1] - arr[0];
    for (let i = 0; i < arr.length; i++) {
        let diff = (arr[i] - arr[i-1]);
        if ( diff < minDiff) {
            minDiff = diff;
        }
    }
    return minDiff;
}
