'use strict';

/*
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

*/

function initializeNames(name) {
    let strArr = name.split(' ');

    if (strArr.length < 3) return name;

    return strArr.map((el, i, arr) => i !== 0 && i !== arr.length - 1 ? el[0].toUpperCase() + '.': el).join(' ')
}



console.log(initializeNames('Jack Ryan'));
console.log(initializeNames('Lois Mary Lane'));
console.log(initializeNames('Alice Betty Catherine Davis'));


