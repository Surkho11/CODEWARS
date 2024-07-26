'use strict';

/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
*/

const array = ["abracadabra","allottee","assessee"];

function dup(s) {
    const result = [];

    for (let i = 0; i < s.length; i++) {
        let str = '';
        for (let j = 0; j < s[i].length; j++) {
            if (s[i][j] !== s[i][j+1]) {
                str+=s[i][j]
            }
        }
        result.push(str)
    }

    return result;
};



console.log(dup(array));