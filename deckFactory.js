
const crypto = require('crypto');

const suits = ['s','d','c','h'];
const values = [1,2,3,4,5,6,7,8,9,10,11,12,13];

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const r = crypto.randomInt(1000)/1000
        const j = Math.floor(r * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getDeck(){
    deck = [];
    values.forEach(v=>{suits.forEach(s=>{deck.push(v+s)})});
    return deck;
}

function getRandomizedDeck(){
    let deck =  getDeck();
    return shuffle(deck);
}

function isValidCard(card){
    return ((typeof card == 'string') &&
    suits.includes(card.substring(card.length-1)) &&
    values.includes(parseInt(card.substring(0,card.length-1))))?true:false
}


exports.suits = suits;
exports.values = values;
exports.getRandomizedDeck = getRandomizedDeck;
exports.isValidCard = isValidCard;

