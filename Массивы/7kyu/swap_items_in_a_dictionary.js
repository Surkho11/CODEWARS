'use strict';

/*
DESCRIPTION:
In this kata, you will take the keys and values of an object and swap them around.

You will be given a dictionary, and then you will want to return a dictionary with the old values as the keys, and list the old keys as values under their original keys.

For example, given the dictionary: {'Ice': 'Cream', 'Age': '21', 'Light': 'Cream', 'Double': 'Cream'},

you should return: {'Cream': ['Ice', 'Double', 'Light'], '21': ['Age']}

Notes:
The dictionary given will only contain strings
The dictionary given will not be empty
You do not have to sort the items in the lists
*/

let before = {
    'Ice': 'Cream',
    'Age': '21',
    'Light': 'Cream',
    'Double': 'Cream'
    }

function switchDict(dic) {
  // Получаем уникальные значения из ключей объекта
  const uniqueValues = [...new Set(Object.values(dic))];
  
  // Получаем пары ключ-значение в виде массива
  const entries = Object.entries(dic);
  
  // Создаем объект для результата
  const result = uniqueValues.reduce((acc, value) => {
    // Фильтруем ключи, у которых значение соответствует текущему уникальному значению
    const keys = entries.filter(([key, val]) => val === value).map(([key]) => key);
    acc[value] = keys;
    return acc;
  }, {});

  return result;
}

console.log(switchDict(before));