'use strict';

/*
You will be given an array which lists the current inventory of stock in your store and another array which lists the new inventory being delivered to your store today.

Your task is to write a function that returns the updated list of your current inventory in alphabetical order.

Example
currentStock = [[25, 'HTC'], [1000, 'Nokia'], [50, 'Samsung'], [33, 'Sony'], [10, 'Apple']]
newStock = [[5, 'LG'], [10, 'Sony'], [4, 'Samsung'], [5, 'Apple']]

updateInventory(currentStock, newStock)  ==>
[[15, 'Apple'], [25, 'HTC'], [5, 'LG'], [1000, 'Nokia'], [54, 'Samsung'],
*/

const currentStock = [
	[ 10, 'Apple Watch Phone' ],
  [25, 'HTC'],
  [1000, 'Nokia'],
  [50, 'Samsung'],
  [33, 'Sony'],
  [10, 'Apple'],
];
const newStock = [
  [5, 'LG'],
  [10, 'Sony'],
  [4, 'Samsung'],
  [5, 'Apple'],
];

function updateInventory(curStock, newStock) {
  const inventoryMap = {};

  // Объединяем текущий и новый инвентарь
  const combinedStock = curStock.concat(newStock);

  // Суммируем количество для каждого бренда
  for (const [quantity, brand] of combinedStock) {
    if (inventoryMap[brand]) {
      inventoryMap[brand] += quantity;
    } else {
      inventoryMap[brand] = quantity;
    }
  }

  // Преобразуем объект в массив пар [бренд, количество]
  const inventoryArray = Object.entries(inventoryMap);

  // Сортируем массив по названию бренда в алфавитном порядке
  inventoryArray.sort((a, b) => a[0].localeCompare(b[0]));

  // Форматируем вывод в виде [количество, бренд]
  return inventoryArray.map(([brand, quantity]) => [quantity, brand]);
}

console.log(updateInventory(currentStock, newStock));
