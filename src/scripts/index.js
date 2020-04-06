import { buttonValidateCard, inputNumberCard } from './selectors.js';
import validator from './validator.js';

inputNumberCard.addEventListener('input', () => {
  let valueCard = inputNumberCard.value;
  inputNumberCard.value = maskCard(valueCard);
});

buttonValidateCard.addEventListener('click', () => {
  let valueCard = inputNumberCard.value;
  let numberCard = valueCard.replace(/\D/g, '')
  let result = validator.valid(numberCard);
  if(result) {
    alert('valid');
  } else {
    alert('invalid');
  }
});

function maskCard(valueCard) {
  const separator = ' . ';
  let numberCard = valueCard.replace(/\D/g, '');

  if(numberCard.length > 4) {
    numberCard = numberCard.substr(0, 4) + separator + numberCard.substr(4);
  }

  if(numberCard.length > 8) {
    numberCard = numberCard.substr(0, 8 + separator.length) + separator + numberCard.substr(8 + separator.length);
  }

  if(numberCard.length > 12 + separator.length * 2) {
    numberCard = numberCard.substr(0, 12 + separator.length * 2) + separator + numberCard.substr(12 + separator.length * 2, 4);
  }

  return numberCard;
}

