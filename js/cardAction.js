'use strict'

console.log('hello from cardAction');

//переворот карточки при клике//
const playground = document.querySelector('.playground');
let cardsOpenCounter = 0;

playground.addEventListener('click', (event) => {
  console.log('pin' + event.target);
  const card = event.target.closest('.flip__card');
  if (card) {
    cardsOpenCounter++;
    console.log('pin ' + cardsOpenCounter);
    if (cardsOpenCounter < 2) {
      event.target.classList.add('active');
      console.log('pin');
    } else {
      setTimeout(() => {
        document.querySelectorAll('.flip__card').forEach(card => {
          card.classList.remove('active');
          cardsOpenCounter = 0;
        });
      }, 1000);
    }
  }
});