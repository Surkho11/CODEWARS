'use strict';


/*
    Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

    Example
    arrayLowerCase(['Red', 'Green']) == ['red', 'green'];
    arrayLowerCase([1, 'Green']) == [1, 'green'];
*/


function arrayLowerCase(arr) {
    return arr.map(value => typeof value === 'string' ? value.toLowerCase() : value) // return array of strings in lowercase
}

console.log(arrayLowerCase(['Red', 'Green']));
console.log(arrayLowerCase([1, 'Green']));