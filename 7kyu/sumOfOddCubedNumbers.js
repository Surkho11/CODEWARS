'use strict';

const cubeOdd = function (arr) {
    // Проверяем, все ли элементы массива являются числами
    if (!arr.every(num => typeof num === 'number')) {
        return undefined;
    }

    // Возводим числа в куб и суммируем только нечетные
    const result = arr
        .map(num => Math.pow(num, 3))
        .reduce((acc, num) => {
            if (num % 2 !== 0) {
                return acc + num;
            } else {
                return acc;
            }
        }, 0);

    return result;
}

console.log(cubeOdd(["a",12,9,"z",42]));