'use strict';


/*
While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.

So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.

If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".

If string contains 4 numbers but not consecutive it returns "not consecutive".
*/

function checkRoot(string){
    let arrStr = string.split(',')
    
    if (arrStr.length < 4 || arrStr.length > 4) {
        return 'incorrect input';
    }
    
    let num = arrStr.map(num => Number(num)).every(num => !isNaN(num));
    console.log(num);

    if (num === false) return 'incorrect input';

    for (let i = 0; i < arrStr.length - 1; i++) {
        if (Number(arrStr[i]) + 1 !== Number(arrStr[i + 1]) ) {
            return "not consecutive";
        }
    }

    let productOfNumbers = arrStr.reduce((acc, num) => acc * num, 1);

    return `${productOfNumbers + 1}, ${Math.sqrt(productOfNumbers + 1)}`;
}

console.log(checkRoot('4,5,6,7'));
console.log(checkRoot('3,s,5,6'));
console.log(checkRoot('11,13,14,15'));
