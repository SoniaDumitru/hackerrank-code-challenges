// Complete the function maximumToys in the editor below. It should return an integer representing the maximum number of toys Mark can purchase.
//
// maximumToys has the following parameter(s):
//
// prices: an array of integers representing toy prices
// k: an integer, Mark's budget
//
// prices: an array of integers representing toy prices
// k: an integer, Mark's budget

function maximumToys(prices, k) {
    let count = 0;
    let sum = 0;
    //sort the array so we can compare elements
    prices = prices.sort()
    for (let i=0; i < prices.length; i++) {
        //if (0 + first price) is less than budget them add prices and keep comparing with budget
        if (sum + prices[i] <= k) {
            sum += prices[i];
            count++;
        }
    }
    return count;
}
// maximumToys([1,2,3],9) => result: 3
