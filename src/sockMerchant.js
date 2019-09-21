// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

function sockMerchant(n, ar) {
    let count = 0;
    ar = ar.sort()
    for (let i=0; i<=n-1; i++) {
        if (ar[i] === ar[i+1]) {
            count++;
            i=i+1;
        }
    }
    return count;
}
