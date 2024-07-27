'use strict';

/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.


*/

function reverse(str) {
  let resultStr = str.split(' ').map((el, i) => {
    if (i % 2 === 0) {
      return el;
    } else {
      return el
        .split('')
        .reverse()
        .join('');
    }
  });

  return resultStr.join(' ').trim();
}

console.log(reverse("Reverse this string, please!"));
console.log(reverse("I really don't like reversing strings!"));

console.log(['t h i s'].reverse());