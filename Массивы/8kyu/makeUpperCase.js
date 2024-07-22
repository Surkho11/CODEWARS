'use strict';

// Write a function which converts the input string to uppercase.
// Напишите функцию, которая преобразует входную строку в верхний регистр.

const makeUpperCase = function(str) {
    return str.toUpperCase()
}

console.log(makeUpperCase("hello"));
console.log(makeUpperCase("Hello"));
console.log(makeUpperCase("HELLO"));