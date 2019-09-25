// Given a string and a character, task is to make a function which count occurrence of the given character in the string.

function countLetter(letter, string) {
  let count = 0;
  for (let i=0; i < string.length; i++) {
    if (letter = string[i]) {
      count ++;
    }
  }
  return count;
}
