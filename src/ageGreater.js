// Given an array of hashes, return all people true if there are people 49 years or old.

let people = [
    { name: "Robin",     year: 1970   },
    { name: "Supergirl", year: 1965 },
    { name: "Oracle",    year: 1964   },
    { name: "Krypto",    year: 1967 }
];

function mature(arr) {
  let maturePeople = [];
    for (let i = 0; i < arr.length ; i++) {
      if (arr[i].year >= 1970) {
          maturePeople.push(arr[i]);
      }
      if (maturePeople.length > 0) {
        return true;
      }
      return false;
  }
}
mature(people);
