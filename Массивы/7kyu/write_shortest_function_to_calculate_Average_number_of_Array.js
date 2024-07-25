'use strict';

/*
Given an array of integers, calculate the Average of these numbers.

Main challenge is to write shortest and compact function for it.

For example: var a = [0, 1, 2];
avg(a) // output should be 1
Output of function will be also checked in tests, however most important is to write the shortest possible function (code length < 100). Input will always be valid.
*/

function avg(a){
    return a.reduce((acc, num) => acc + num, 0) / a.length;
}

console.log(avg([0, 1, 2, 3, 4]));