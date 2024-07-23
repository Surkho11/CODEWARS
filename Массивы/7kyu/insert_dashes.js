'use strict';

// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).


function insertDash(num) {
    // Преобразуем число в строку для удобства обработки символов
    const strNum = num.toString();
    let result = '';

    // Проходим по каждому символу строки
    for (let i = 0; i < strNum.length; i++) {
        result += strNum[i]; // Добавляем текущий символ к результату
        
        // Проверяем, что текущий и следующий символы являются нечетными числами
        if (i < strNum.length - 1 && parseInt(strNum[i]) % 2 !== 0 && parseInt(strNum[i + 1]) % 2 !== 0) {
            result += '-'; // Если условие выполняется, добавляем тире
        }
    }

    return result;
}

console.log(insertDash(454793));
console.log(insertDash(123456));
console.log(insertDash(1003567));