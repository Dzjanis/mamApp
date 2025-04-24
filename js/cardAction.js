'use strict'

console.log('hello from cardAction');

//переворот карточки при клике//
const playground = document.querySelector('.playground');
let cardsOpenCounter = 0;

playground.addEventListener('click', function (event) {
  console.log('pin' + event.target);
  const card = event.target.closest('.flip__card');
  if (card && !card.classList.contains('active')) {
    cardsOpenCounter++;
    console.log('pin ' + cardsOpenCounter + card.classList);
    if (cardsOpenCounter <= 2) {
      card.classList.add('active');
      console.log('pin');
    }
    if (cardsOpenCounter === 2) {
      setTimeout(() => {
        document.querySelectorAll('.flip__card').forEach(card => {
          card.classList.remove('active');
          cardsOpenCounter = 0;
        });
      }, 500);
    }
  }
});