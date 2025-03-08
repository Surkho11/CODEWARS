'use strict';


/*
Complete the method so that it returns an array of all ID's passed in. The data structure will be similar to the following:

var data = {
  id: 1,
  items: [
    {id: 2},
    {id: 3, items: [
      {id: 4},
      {id: 5}
    ]}
  ]
}

extractIds(data) // should return [1,2,3,4,5]
The method should be able to handle the case of empty data being passed in.

Note: The only arrays that need to be traversed are those assigned to the "items" property.
*/


function extractIds(data) {
	// Создаём массив для хранения ID
	let result = [];

	// Если data пустой или не объект, возвращаем пустой массив
	if (!data || typeof data !== 'object') {
			return result;
	}

	// Если у data есть свойство 'id', добавляем его в результат
	if (data.id !== undefined) {
			result.push(data.id);
	}

	// Если у data есть свойство 'items' (массив), обрабатываем каждый элемент
	if (Array.isArray(data.items)) {
			for (const item of data.items) {
				
				
					// Рекурсивно вызываем extractIds для каждого элемента и объединяем результаты
					result = result.concat(extractIds(item));
			}
	}

	// Возвращаем массив с ID
	return result;
}

// Пример использования
const data2 = {
	id: 1,
	items: [
			{ id: 2 },
			{ id: 3, items: [
					{ id: 4 },
					{ id: 5 }
			]}
	]
};

console.log(extractIds(data2));


