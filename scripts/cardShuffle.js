'use strict';
console.log('Creating CardShuffle...');

const shuffle = document.getElementById('shuffle');
let cardsArray = [1, 2, 3, 4 ,5 ,6];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Меняем местами элементы
  }
  return array;
}

// Пример использования:
shuffle.addEventListener("click", () =>{
console.log('before shufle' + shuffleArray);
const shuffledArray = shuffleArray([...cardsArray]);
console.log(shuffledArray);
});
