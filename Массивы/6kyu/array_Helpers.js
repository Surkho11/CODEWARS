'use strict';

/*
This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
*/

const arr = [1, 2, 3, 4, 5];

Array.prototype.square = function() {
    return this.map(values => Math.pow(values, 2))
};

Array.prototype.cube = function() {
    return this.map(values => Math.pow(values, 3))
};

Array.prototype.sum = function() {
    return this.reduce((acc, values) => acc + values, 0)
};

Array.prototype.even = function() {
    return this.filter(values => values % 2 === 0 )
};

Array.prototype.odd = function() {
    return this.filter(values => values % 2 !== 0 )
};

Array.prototype.average = function() {
    if (this.length === 0) return NaN;
    return this.sum() / this.length;
};

console.log(arr.square());