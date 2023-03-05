const crypto = require('crypto');
const df = require("./DeckFactory");
const u = require("./utilities");

class Player{
    #id;
    #hand=[];
    #isSmallBlind=false;
    #isBigBlind=false;

    constructor(){
        //this.#id = Math.ceil(Math.random()*10000);
        this.#id = crypto.randomUUID({disableEntropyCache:true});
    }

    get id(){
        return this.#id;
    }

    get hand(){
        return this.#hand;
    }

    set hand(h){
        let first,last;
        [first, last]= h;
        if(!u.isValidCard(first) || !u.isValidCard(last)) {
            throw new Error(`At least one card is invalid: first card is ${first}, last card is ${last}`);
        }

        this.#hand = h;
    }


    set isSmallBlind(b){
        this.#isSmallBlind=b;
    }

    set isBigBlind(b){
        this.#isBigBlind=b;
    }
}

function createPlayer(){
   return new Player();
}

exports.createPlayer = createPlayer;