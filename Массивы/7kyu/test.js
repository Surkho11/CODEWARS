'use strict';

function dropWhile(arr) {
 
    const maxIndex = arr.indexOf(Math.max(...arr))

    let newArr = arr.splice(maxIndex,)
    return arr
  
}

console.log(dropWhile([ 2, 4, 8 ]));