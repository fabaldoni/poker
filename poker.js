
const p = require("./playerFactory");
const hf = require("./handFactory");
const gf = require("./gameFactory");


const game = gf.createGame()
game.newHand()
game.addPlayer(p.createPlayer());
game.addPlayer(p.createPlayer());
game.dealPlayerCards();
game.dealFlop();
game.dealTurn();
game.dealRiver();
game.showGame();



