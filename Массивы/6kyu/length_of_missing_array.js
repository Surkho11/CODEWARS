'use strict';

// DESCRIPTION:
// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!
// You have to write a method, that return the length of the missing array.
// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
// If the array of arrays is null/nil or empty, the method should return 0.
// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.
// Have fun coding it and please don't forget to vote and rank this kata! :-)

function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays || arrayOfArrays.length === 0) {
        return 0;
    }

    // Проверяем каждый внутренний массив на null или пустоту
    for (let arr of arrayOfArrays) {
        if (!arr || arr.length === 0) {
            return 0;
        }
    }

    // Создаем массив длин
    const lengths = arrayOfArrays.map(arr => arr.length);

    // Сортируем массив длин
    lengths.sort((a, b) => a - b);

    // Ищем пропущенную длину
    for (let i = 0; i < lengths.length - 1; i++) {
        if (lengths[i + 1] !== lengths[i] + 1) {
            return lengths[i] + 1;
        }
    }

    return 0; // На случай, если не найдено пропущенной длины
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9], null]));

console.log();