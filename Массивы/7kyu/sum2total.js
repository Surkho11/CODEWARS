'use strict'

/*
Write a function that takes an array/list of numbers and returns a number such that

Explanation total([1,2,3,4,5]) => 48

1+2=3--\ 3+5 =>     8 \
2+3=5--/ \            ==  8+12=>20\     
          ==>5+7=> 12 / \           20+28 => 48
3+4=7--\ /            == 12+16=>28/
4+5=9--/ 7+9 =>     16  /

if total([1,2,3]) => 8 then

first+second => 3 \
                   then 3+5 => 8
second+third => 5 /

Examples
total([-1,-1,-1]) => -4
total([1,2,3,4])  => 20
*/

function total(arr) {
    // Базовый случай: если массив пустой, возвращаем 0
    if (arr.length === 0) return 0;
    
    // Базовый случай: если массив содержит один элемент, возвращаем его
    if (arr.length === 1) return arr[0];

    // Составляем новый массив с суммами соседних элементов
    const result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        result.push(arr[i] + arr[i + 1]);
    }

    // Рекурсивный вызов с новым массивом и возврат результата
    return total(result);
}


console.log(total([1,2,3,4,5]));