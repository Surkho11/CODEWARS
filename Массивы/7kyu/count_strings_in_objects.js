'use strict';

/*
Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3
*/

function strCount(obj){
    let count = 0;

    function countStrings(value) {
        if (typeof value === 'string') {
            count++;
        } else if (Array.isArray(value)) {
            value.forEach(item => countStrings(item));
        } else if (value && typeof value === 'object') {
            Object.values(value).forEach(item => countStrings(item));
        }
    }

    countStrings(obj);
    return count;
}

console.log(strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
    })
   );