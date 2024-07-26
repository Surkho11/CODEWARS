'use strict';


/*
DESCRIPTION:
You received an array with two strings. Create a function that will return their product as a string. E.g.

arrMultiply(['9','6']) should return '54'
 */

function arrMultiply(arr){
    const [num1, num2] = arr;

    return `${+num1 * +num2}`
 }

 console.log(arrMultiply(['4','5']));
 console.log(arrMultiply(['2','-5']));
 console.log(arrMultiply(['9','0']));