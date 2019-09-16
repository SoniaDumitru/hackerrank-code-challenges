// Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:
// Array is sorted in numSwaps swaps., where  is the number of swaps that took place.
// First Element: firstElement, where  is the first element in the sorted array.
// Last Element: lastElement, where  is the last element in the sorted array.

let a = [2,4,6,2];
function countSwaps(a) {
    var swapCount = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swapCount++;
            }
        }
    }
    console.log("Array is sorted in " + swapCount + " swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[a.length - 1]);
}
// countSwaps(a);
