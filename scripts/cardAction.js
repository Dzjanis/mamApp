'use strict'

console.log('hello from cardAction');

//переворот карточки при клике//
const playground = document.querySelector('.playground');
const newGame = document.getElementById('newGame');
const shuffle = document.getElementById('shuffle');
let cardsOpenCounter = 0;
let img1alt = undefined, img2alt = undefined;

// перемешивание карточек //
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Меняем местами элементы
  }
  return array;
}

playground.addEventListener('click', function (event) {
  const card = event.target.closest('.flip__card');
  if (card && !card.classList.contains('active')) {
    cardsOpenCounter++;
    console.log('pin ' + cardsOpenCounter + card.classList);
    if (cardsOpenCounter <= 2) {
      card.classList.add('active');
      switch (cardsOpenCounter) {
        case 1:
          img1alt = card.querySelector('img').alt;
          break;
        case 2:
          img2alt = card.querySelector('img').alt;
          break;
        default:
          alert('Fatal error! Refresh page')
      }
    }
  }
  if (cardsOpenCounter === 2 && img1alt === img2alt) {
    document.querySelectorAll('.flip__card.active').forEach(card => {
      card.classList.add('match');
      card.classList.remove('active');
      cardsOpenCounter = 0;
    })
  }
  if (cardsOpenCounter === 2 && img1alt !== img2alt) {
    setTimeout(() => {
      document.querySelectorAll('.flip__card').forEach(card => {
        card.classList.remove('active');
        cardsOpenCounter = 0;
      });
    }, 1000);
  }
});

// запуск новой игры //

newGame.addEventListener('click',  () => {
  document.querySelectorAll('.flip__card.active').forEach(card => {
    card.classList.remove('active');
  });
  document.querySelectorAll('.flip__card.match').forEach(card => {
    card.classList.remove('match');
  });
  const cards = Array.from(playground.children)
  shuffleArray(cards);
  playground.innerHTML = '';
  cards.forEach(card => playground.appendChild(card));
});

shuffle.addEventListener("click", () =>{
  const cards = Array.from(playground.children)
  shuffleArray(cards);
  playground.innerHTML = '';
  cards.forEach(card => playground.appendChild(card));
});