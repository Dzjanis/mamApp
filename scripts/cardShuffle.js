'use strict';



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Меняем местами элементы
  }
  return array;
}

// Пример использования:
const arr = [1, 2, 3, 4, 5];
console.log(shuffleArray(arr)); // Результат: перемешанный массив