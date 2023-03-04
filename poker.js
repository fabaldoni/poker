//const df = require("./deckFactory");
const p = require("./playerFactory");
const hf = require("./handFactory");
const gf = require("./gameFactory");

//console.log(df.getRandomizedDeck());
const game = gf.createGame()
game.newHand()
game.addPlayer(p.createPlayer());
game.addPlayer(p.createPlayer());
game.dealPlayerCards();
game.dealFlop();
game.dealTurn();
game.dealRiver();
game.showGame();

console.log(JSON.stringify(game.players));
//console.log(player.id)
//const hand = hf.createNewHand();
//console.log(hand.dealHand());

