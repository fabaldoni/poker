//const df = require("./deckFactory");
const p = require("./playerFactory");
const hf = require("./handFactory");

//console.log(df.getRandomizedDeck());
const player =  p.createPlayer();
console.log(player.id)
const hand = hf.createNewHand();
console.log(hand.dealHand());

