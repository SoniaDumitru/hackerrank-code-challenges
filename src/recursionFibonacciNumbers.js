// The Fibonacci sequence appears in nature all around us, in the arrangement of seeds in a sunflower and the spiral of a nautilus for example.
// The Fibonacci sequence begins with  and  as its first and second terms. After these first two elements, each subsequent element is equal to the sum of the previous two elements.

function fibonacci(n) {
    if (n < 2){
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// same as:
  function fibonacci(n) {
  let array = [0, 1];
   for (let i = 2; i < n + 1; i++){
     array.push(array[i - 2] + array[i - 1]);
   }
  return array[n];
}
