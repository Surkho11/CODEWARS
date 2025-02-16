'use strict';



function correctPolishLetters (string) {
  const lettersWithDiacritics = {
    ą : "a",
    ć : "c",
    ę : "e",
    ł : "l",
    ń : "n",
    ó : "o",
    ś : "s",
    ź : "z",
    ż : "z"
  }
  
  let str = '';
  
  for (let i = 0; i < string.length; i++) {
    if (lettersWithDiacritics[string[i]]) {
      str += lettersWithDiacritics[string[i]]
    } else {
      str += string[i]
    }
  }
  
  return str;
}