'use strict';

/*
An array is defined to be inertialif the following conditions hold:

a. it contains at least one odd value  
b. the maximum value in the array is even 
c. every odd value is greater than every even value that is not the maximum value.
eg:-

So [11, 4, 20, 9, 2, 8] is inertial because 
a. it contains at least one odd value [11,9] 
b. the maximum value in the array is 20 which is even 
c. the two odd values (11 and 9) are greater than all the even values that are not equal to 20 (the maximum), i.e., [4, 2, 8]
Write a function called is_inertial that accepts an integer array and returns true if the array is inertial; otherwise it returns false.
*/

const isInertial = function(array) {
  
    let notEvenNumbers = array.filter(num => num % 2 !== 0);

    if (notEvenNumbers.length === 0) return false;

    let maxNumber = Math.max(...array);

    if (maxNumber % 2 !== 0) return false;

    for (let i = 0; i < notEvenNumbers.length; i++) {
        if (array.some(num => num % 2 === 0 && num !== maxNumber && notEvenNumbers[i] <= num)) {
            return false;
        }
    }
    

    return true
};

console.log(isInertial([11, 4, 20, 9, 2, 8]));
