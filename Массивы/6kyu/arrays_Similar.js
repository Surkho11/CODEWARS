'use strict';

/*
Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

var arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]
arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false
*/

function arraysSimilar(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;


    const filtArr1 = arr1.filter(val => typeof val === 'number')
    const filtArr2 = arr2.filter(val => typeof val === 'number')

    if (filtArr1.length !== filtArr2.length) {
        return false
    }

    const countElements = (arr) => {
        const count = {};
        for (const element of arr) {
            count[element] = (count[element] || 0) + 1;
        }
        return count;
    };

    const count1 = countElements(arr1);
    const count2 = countElements(arr2);

    for (const key in count1) {
        if (count1[key] !== count2[key]) {
            return false;
        }
    }

    return true;
}



const arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]

console.log(arraysSimilar(arr1, arr2));
console.log(arraysSimilar(arr2, arr3));
console.log(arraysSimilar(arr3, arr4));


