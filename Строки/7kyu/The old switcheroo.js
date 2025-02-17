'use strict';

/*
Write a function

vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''
Your function should be case insensitive to the vowels.
*/

function vowel2index(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase(); // Приводим символ к нижнему регистру для регистронезависимости
    if (['a', 'e', 'i', 'o', 'u'].includes(char)) { // Проверяем, является ли символ гласной
      result += (i + 1); // Добавляем позицию (индекс + 1, так как индексация начинается с 0)
    } else {
      result += str[i]; // Если символ не гласная, добавляем его как есть
    }
  }

  return result;
}

console.log(vowel2index('this is my string'));
console.log(vowel2index('Codewars is the best site in the world'));
console.log(vowel2index('Tomorrow is going to be raining'));
