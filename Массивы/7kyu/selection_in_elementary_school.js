'use strict';
/*
Hello, my name is Anna, and I'm the director of elementary school. Every month I accept applications for schooling from new guys and when I process it manually, I get a little tired. Сould you help me and automate this process?

If so, you have information about the ages of all these new pupils (array of ages - only positive digital numbers). Your goal is to sort sort these ages by grade. Your function schoolSelection needs to return an object where key is grade level and value is a number of convenient ages.

Additional information:

Level           -> age

Kindergarten     -> 5
1st grade        -> 6
2nd grade        -> 7
3rd grade        -> 8
4th grade        -> 9
Example:



Output: 
{
  'Kindergarten': 3,
  '1st grade': 0,
  '2nd grade': 1, 
  '3rd grade': 0, 
  '4th grade': 2,
}
*/


const schoolSelectionArr = [5, 7, 4, 9, 10, 5, 15, 9, 5]



function schoolSelection(array) {
  const obj =  {
        'Kindergarten': 0,
        '1st grade': 0,
        '2nd grade': 0, 
        '3rd grade': 0, 
        '4th grade': 0,
      }

      for (let i = 0; i < array.length; i++) {
        if (array[i] === 5) {
            obj['Kindergarten']++
        } else if (array[i] === 6) {
            obj['1st grade']++
        } else if (array[i] === 7) {
            obj['2nd grade']++
        } else if (array[i] === 8) {
            obj['3rd grade']++
        } else if (array[i] === 9) {
            obj['4th grade']++
        }
      }

      return obj
}

console.log(schoolSelection(schoolSelectionArr));