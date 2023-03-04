const crypto = require('crypto');
const df = require("./DeckFactory");

class Game{
    #id;
    #players;
    #deck;
    #communityCards=[];

    constructor(){
        this.#players = [];
        this.#id = crypto.randomUUID({disableEntropyCache:true});
    }

    get id(){
        return this.#id;
    }

    get players(){
        return this.#players;
    }

    addPlayer(player){
        this.#players.push(player)
    }

    removePlayer(player){
        const idx = this.#players.indexOf(player)
        if(idx) this.#players.splice(idx)
    }

    newHand(){
        this.#deck = df.getRandomizedDeck()
    }

    dealPlayerCards(){
        this.#players.forEach(p=>{
            const fistCard = this.#deck.pop();
            const secondCard =  this.#deck.pop();
            p.hand = [fistCard,secondCard];
        })
    }

    clearCommunityCards(){
        this.#communityCards=[];
    }

    dealFlop(){
        this.clearCommunityCards();
        for(var i=0; i<3; i++) this.#communityCards.push(this.#deck.pop())
    }

    dealTurn(){
        this.#communityCards.push(this.#deck.pop())
    }

    dealRiver(){
        this.#communityCards.push(this.#deck.pop())
    }

    showGame(){
        this.#players.forEach(p=>{
            console.log(JSON.stringify(p.hand))
        })
        console.log(`community cards: ${JSON.stringify(this.#communityCards)}`)
    }

}

function createGame(){
   return new Game();
}

exports.createGame = createGame;