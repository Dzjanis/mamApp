'use strict';
console.log('Creating CardShuffle...');

const shuffle = document.getElementById('shuffle');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Меняем местами элементы
  }
  return array;
}

shuffle.addEventListener("click", () =>{
const playground = document.getElementsByClassName('.playground')
const shuffledArray = shuffleArray([...cardsArray]);

});
