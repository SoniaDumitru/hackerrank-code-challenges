// Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.
// Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

let flowerbed = [1,0,0,0,1];
let n = 1;
function fl(flowerbed, n) {
   let current = 0;
   let size = flowerbed.size;
      for(let i = 0; i <= size; i++) {
      if (i < size && flowerbed[i] == 0) {
          current++;
          if (i == 0) current++;
          if (i == size - 1) current++;
      } else {
          n -= (current - 1) / 2;
          if (n <= 0) return true;
          current = 0;
      }
  }
  return false;
}
fl(flowerbed, n) => result: false;
