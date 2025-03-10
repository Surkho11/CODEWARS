'use strict';


/*
One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

instead of including i or I put the number 1 in the password;
instead of including o or O put the number 0 in the password;
instead of including s or S put the number 5 in the password.
Examples:
"Give me liberty or give me death"  --> "Gml0gmd"
"Keep Calm and Carry On"            --> "KCaC0"

*/

function makePassword(phrase) {
  return phrase
    .split(' ')
    .map(word => word[0]) // Берем первую букву каждого слова
    .join('') // Объединяем буквы в строку
    .replace(/o/gi, '0') // Заменяем 'o' и 'O' на '0'
    .replace(/i/gi, '1') // Заменяем 'i' и 'I' на '1'
    .replace(/s/gi, '5'); // Заменяем 's' и 'S' на '5'
}

// Примеры использования:
console.log(makePassword("Give me liberty or give me death")); // "Gml0gmd"
console.log(makePassword("Keep Calm and Carry On")); // "KCaC0"

