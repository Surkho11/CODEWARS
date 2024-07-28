'use strict';

/*
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/

function explode(x){
    let numbers = x.filter(value => typeof value === 'number')
    
    if (numbers.length === 0) return 'Void!'

    let sum = numbers.reduce((acc, val) => acc + val, 0)
    
    return Array.from({length: sum}, () => x)
 }

console.log(explode([9, 3]));
console.log(explode(['a', 3]));
console.log(explode([6, 'c']));