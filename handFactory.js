const df = require("./DeckFactory");

class Hand{
    #deck;
    
    constructor(deck){
        this.#deck = deck;
    }

    dealHand(){ 
        const hand = [];
        hand.push(this.#deck.pop());
        hand.push(this.#deck.pop());
        return hand;   
    }    
}

function createNewHand(){
    const hand = new Hand(df.getRandomizedDeck())
    return hand;
}

exports.createNewHand = createNewHand;