const SUITS = ['spade', 'club', 'diamond', 'heart'] //
const VALUES = [
    'Ace', 
    '2', 
    '3', 
    '4', 
    '5', 
    '6', 
    '7', 
    '8', 
    '9', 
    '10', 
    'Jack', 
    'Queen', 
    'King'
]

class Deck {
    constructor(cards = newDeck()){
        this.cards = cards;
        
        
    }

    firstPlayer(player){
        if (player instanceof Deck){
            this.players.push(player);
        } else {
            throw new error(`argument is not a player: ${player}`);
        }
    }

    describe() {
        return `${this.cards} has ${this.players.length}`
    }

    
}


class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }

    describe() {
        return `${this.suit} is ${this.value}.`;
    }
    
}



const deck = new Deck()

console.log(deck.cards)

function newDeck() {
    return SUITS.flatMap(suit => {  //returns array of arrays but it flattened into one array
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}


