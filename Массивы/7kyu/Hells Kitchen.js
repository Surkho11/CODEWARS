'use strict';

/*
Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
*/

// function gordon(a) {
//   return a
//     .split(' ')
//     .map((str) => str.replace(/o|u|i|e/g, '*').toUpperCase() + '!!!')
//     .join(' ')
//     .replace(/a/gi, '@');
// }

function gordon(a) {
    const obj = {
        A: '@',
        a: '@',
        e: '*',
        i: '*',
        o: '*',
        u: '*'
    }

    let str = '';

    for (let i = 0; i < a.length; i++) {
        if (obj[a[i]]) {
            str += obj[a[i]]
        } else {
            str += a[i]
        }
    }
    return str.split(' ').map(el => el.toUpperCase() + '!!!!').join(' ')
  }

console.log(gordon('What feck damn cake'));