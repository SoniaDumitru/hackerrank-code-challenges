// Complete the checkMagazine function in the editor below. It must print Yes if the note can be formed using the magazine, or No.
//
// checkMagazine has the following parameters:
//
// magazine: an array of strings, each a word in the magazine
// note: an array of strings, each a word in the ransom note

function checkMagazine(magazine, note) {
  magazine.sort();
  note.sort();
  let i = 0;
  let j = 0;
  let count = 0;
  while (i < note.length && j < magazine.length) {
      if (note[i] == magazine[j]) {
          count++;
          i++;
      }
      j++;
  }
  if (count == note.length) console.log('Yes')
  else console.log('No')
}

// let a = ['ana', 'are', 'mere']
// let b = ['ana', 'are']
// checkMagazine(a,b)
// result => Yes
