console.log('ciao mondo');

/*

Anagram Detector
Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.

In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".

Suggestions
Start out by getting this working with discrete functions.
If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

*/
//
// const anagram = function (word, array) {
//
// };

//
// const word = 'listen';
// const anagram = 'enlist';
// const wordSplit = word.split('');
// console.log(wordSplit);
// const wordSort = wordSplit.sort();
// console.log(wordSort);

console.log('-------------------------------');

// const anagramArray = ['enlists', 'google', 'inlets', 'banana'];
//
// const
//
//
// const splitAndSort = function (word) {
//   let wordArray = word.split('');
//   let arraySort = wordArray.sort();
//   console.log(arraySort);
// };

// splitAndSort('banana');
//
// console.log('-----------------------------------');

// const anagramTest = function (word, anagram) {
//   let checkWord = splitAndSort('listen');
//   let checkAnagram = splitAndSort('enlist');
//   if (checkWord === checkAnagram) {
//     console.log("MATCH!");
//   } else {
//     console.log("NO MATCH!");
//   }
// };

// anagramTest('listen', 'enlist');



/*
--------------
LINNA'S ANSWER
--------------
*/

const anagramChecker = {
  let anagrams = [];

  const customSort: function(word) {
    return word = word.split("").sort().join("");
  }

  const checkForAnagram: function (word, candidateWords) {
    // word = word.split("");
    // word = word.sort();
    // word = join("");

    let sortedWord = this.customSort(word);

    for(let i = 0; i < candidateWords.length; i++) {
      let candidate = this.customSort(candidateWords[i]);
      if (sortedWord === candidate) {
        this.anagrams.push(candidateWords[i]);
      }
    }
    return `The anagram of ${ word } is ${ this.anagrams }.`
  }
}
