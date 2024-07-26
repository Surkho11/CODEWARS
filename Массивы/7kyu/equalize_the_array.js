'use strict';

/*
No description!!!

Input :: [10,20,25,0]

Output :: ["+0", "+10", "+15", "-10"]

Show some love, rank and upvote!
*/

function equalize(array){
    if (array.length === 0) return [];
    const result = [];

    array.forEach((num, i, arr) => {
        if ((num - arr[0]) >= 0) {
            result.push(`+${(num - arr[0])}`)
        } else {
            result.push(`${(num - arr[0])}`)
        }
    })

    return result;
}

console.log(equalize([20,30,35,10]));
console.log(equalize([]));
console.log(equalize([10,12,24,50,0,15,20]));