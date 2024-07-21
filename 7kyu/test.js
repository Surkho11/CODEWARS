'use strict';

// ОПИСАНИЕ:
// Напишите функцию factory, которая принимает число в качестве параметра и возвращает другую функцию.

// Возвращаемая функция должна принимать массив чисел в качестве параметра и возвращать массив этих чисел, умноженных на число, переданное в первую функцию .

// В примере ниже 5 — это число, переданное в первую функцию. Поэтому она возвращает функцию, которая берет массив и умножает все его элементы на пять.


// Пример
// var fives = factory(5);       // returns a function - fives
// var myArray = [1, 2, 3];
// fives(myArray);  //returns [5, 10, 15];


function factory(x){
    
return function arrNum(arr) {
            return arr.map(num => num * x)
        }
}

var fives = factory(5);      
var myArray = [1, 2, 3];
console.log(fives(myArray));