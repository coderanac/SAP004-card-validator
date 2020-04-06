import { numberCard } from './selectors.js';

numberCard.addEventListener('input', () => {
    let valueCard = numberCard.value;
    let mask = '';
    for(let i = 4; i > valueCard.length; i+4) {
        mask += valueCard.substr(0,4) + '.';
    }
})
