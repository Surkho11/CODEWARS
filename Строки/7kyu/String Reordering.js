'use strict';

/*
The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

Example
Input:
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

Output:
'Vatsan took his dog for a spin'
*/

function sentence(arrayOfObjects) {
  return arrayOfObjects
    .map((obj) => Object.entries(obj)[0])
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map((arr) => arr[1])
    .join(' ');
}

console.log(
  sentence([
    { '3': 'Jake.' },
    { '5': 'Chinatown' },
    { '1': 'Forget' },
    { '4': 'It is' },
    { '2': 'it' },
  ])
);
