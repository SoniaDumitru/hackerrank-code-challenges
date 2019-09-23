
// .push() method adds one or more elements to the end of an array and returns the new length of the array
// .shift() method removes the first element from an array and returns that removed element

let a = [1,2,3,7,98,72];
let d = 3;
function rotLeft(a, d) {
    // the while() loop executes until d = 0;
    while ( d > 0) {
        a.push(a.shift());
        d--;
        console.log(d)
    }
    return a;
}
rotLeft(a,d);
// result => [ 7, 98, 72, 1, 2, 3 ]
