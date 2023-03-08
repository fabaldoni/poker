
const crypto = require('crypto');
const u = require("./utilities");

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
    u.values.forEach(v=>{u.suits.forEach(s=>{deck.push(v+s)})});
    return deck;
}

function getRandomizedDeck(){
    let deck =  getDeck();
    return shuffle(deck);
}

exports.getRandomizedDeck = getRandomizedDeck;


