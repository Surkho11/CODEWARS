'use strict';


/*
In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

Examples:

secondSymbol('Hello world!!!','l')  --> 3
secondSymbol('Hello world!!!', 'A') --> -1
Good luck ;) And don't forget to rate this Kata if you liked it.

*/

function secondSymbol(s, symbol) {
    let secondsymbol = s.split('').map((el, i) => {
        if (el === symbol) return i
    }).filter(el => el !== undefined);

    
    return secondsymbol.length > 1 ? secondsymbol[1] : -1;
}

console.log(secondSymbol('Hello world!!!','l'));
console.log(secondSymbol('Hello world!!!', 'o'));
