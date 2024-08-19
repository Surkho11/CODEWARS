'use strict';

/*
Given a string of space separated words, return the longest word.
If there are multiple longest words, return the rightmost longest word.

Examples
"red white blue"  =>  "white"
"red blue gold"   =>  "gold"
*/

function longestWord(stringOfWords) {
  const words = stringOfWords.split(' ');
  let longest = '';

  for (const word of words) {
    if (word.length >= longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord('one two three'));
console.log(longestWord('red blue grey'));
console.log(longestWord('red white blue'));
