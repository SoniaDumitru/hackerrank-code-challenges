//Return the string if it is a palindrome.

let string = 'ana'
function returnPalindome(string) {
  return string.split('').reverse().join('');
}
isPalindome(string);


// Return true if the given string is a palindrome. Otherwise, return false.

function isPalindrome(string) {
  for (let i = 0; i < (string.length)/2; i++) {
    if (string[i] !== string[(string.length)-1-i]) {
      return false;
    }
    return true;
  }
}
isPalindrome(string);
