'use strict';

// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

function switcher(x) {
    // Создаем массив, включающий буквы латинского алфавита и специальные символы в порядке, необходимом для преобразования
    const alphabet = 'zyxwvutsrqponmlkjihgfedcba!? ';
    
    // Преобразуем каждый элемент x в соответствующую букву, используя метод map и join для объединения результата в строку
    return x.map(num => alphabet[parseInt(num) - 1]).join('');
}

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));