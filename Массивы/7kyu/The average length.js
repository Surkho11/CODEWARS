'use strict';

/*
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
*/

function averageLength(arr) {
    // Объединяем все строки в одну и делим ее длину на количество элементов, округляем результат
    let averageLength = Math.round(arr.join('').length / arr.length);

    // Создаем новый массив с элементами одинаковой длины
    return arr.reduce((acc, el) => {
        // Повторяем первый символ элемента необходимое количество раз
        acc.push(el[0].repeat(averageLength));
        return acc;
    }, []);
}

// Примеры
console.log(averageLength(['u', 'y'])); // ['u', 'y']
console.log(averageLength(['aa', 'bbb', 'cccc'])); // ['aaa', 'bbb', 'ccc']
console.log(averageLength(['aa', 'bb', 'ddd', 'eee'])); // ['aaa', 'bbb', 'ddd', 'eee']

