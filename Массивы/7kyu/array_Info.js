'use strict';

/*
Brief
Sometimes we need information about the list/arrays we're dealing with. You'll have to write such a function in this kata. Your function must provide the following informations:

Length of the array
Number of integer items in the array
Number of float items in the array
Number of string character items in the array
Number of whitespace items in the array
The informations will be supplied in arrays that are items of another array. Like below:

Output array = [[array length],[no of integer items],[no of float items],[no of string chars items],[no of whitespace items]]

Added Difficulty
If any item count in the array is zero, you'll have to replace it with a None/nil/null value (according to the language). And of course, if the array is empty then return 'Nothing in the array!. For the sake of simplicity, let's just suppose that there are no nested structures.
Output ====== If you're head is spinning (just kidding!) then these examples will help you out-

   
array_info([1,2,3.33,4,5.01,'bass','kick',' '])--------->[[8],[3],[2],[2],[1]]    
array_info([0.001,2,' '])------------------------------>[[3],[1],[1],[None],[1]]   
array_info([])----------------------------------------->'Nothing in the array!'
array_info([' '])-------------------------------------->[[1],[None],[None],[None],[1]]
  
Remarks
The input will always be arrays/lists. So no need to check the inputs.
Hint ==== See the tags!!!
Now let's get going !
*/

function arrayInfo(arr) {
  // Проверяем на пустоту массива
  if (arr.length === 0) return 'Nothing in the array!';

  const arrayLength = arr.length;
  const noOfIntegerItems = arr.filter(
    (num) => typeof num === 'number' && num === Math.floor(num)
  ).length;
  const noOfFloatItems = arr.filter(
    (num) => typeof num === 'number' && num !== Math.floor(num)
  ).length;
  const noOfStringCharsItems = arr.filter(
    (str) => typeof str === 'string' && str !== ' '
  ).length;
  const noOfWhitespaceItems = arr.filter((whitespace) => whitespace === ' ')
    .length;

  return [[arrayLength], [noOfIntegerItems || null], [noOfFloatItems || null], [noOfStringCharsItems || null], [noOfWhitespaceItems || null]];
}

console.log((arrayInfo([1,2,3.33,4,5.01,'bass','kick',' '])));
console.log(arrayInfo([0.001,2,' ']));
console.log(arrayInfo([]));
console.log(arrayInfo([' ']));
console.log(arrayInfo([{}]));
console.log(arrayInfo([' ',' ']));