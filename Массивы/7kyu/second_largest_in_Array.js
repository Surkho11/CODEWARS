'use strict';

/*
DESCRIPTION:
Find and return second largest unique number in given Array.

Array may contain values of any data type. Ignore everything except numbers and strings, which may be converted to numbers.

If passed value is not an Array or if there is no second largest item in given Array (e.g. [1, 1, 1]) should return undefined.

Examples
secondLargest([1, -2, 3]) = 1;
secondLargest([5, 5, 4]) = 4;
secondLargest([2, '3', 4]) = 3;
Should return
// 1. Passed value not an Array:
secondLargest("1 2 3") = undefined;

// 2. There is no second largest:
secondLargest([2, 2, 2]) = undefined;

// 3. Ignore everything except:
//   * numbers
//   * not-NaN strings:
secondLargest(['-1', 2, null, false]) = -1;
Input range
Numbers are safe Integers.
Not-NaN strings represent safe Integers.
*/


function secondLargest(array){

    // Проверка на массив передаваемого аргумента
    if (!Array.isArray(array)) {
        return undefined;
    }

    // Преобразуем строковые числа в числа и фильтруем нечисловые значения
    const arrNum = array
        .map(value => {
            if (typeof value === 'number') {
                return value;
            } else if (typeof value === 'string' && !isNaN(value)) {
                return Number(value);
            }
            return NaN;
        })
        .filter(value => !isNaN(value));

    // Отсортируем массив
    const sortedArr = arrNum.sort((a, b) => a - b);

    // Уберем дубликаты из массива
    const uniqueArr = [...new Set(sortedArr)];

    // Проверим наличие второго по величине уникального числа
    return uniqueArr.length >= 2 ? uniqueArr[uniqueArr.length - 2] : undefined;
} 

console.log(secondLargest(secondLargest("1 2 3")));
console.log(secondLargest(['-1', 2, null, false]));
console.log(secondLargest([1, -2, 3]));
console.log(secondLargest([5, 5, 4]));
console.log(secondLargest([2, '3', 4]));

console.log(secondLargest([2, 2, 2]));
console.log(secondLargest([12, "four", 2, 3, 1, -33]));