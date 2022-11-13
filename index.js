// arrays of suits and cards
const SUITS = ['spade', 'club', 'diamond', 'heart']
const VALUES = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
const player1Points = [] //arrays for the player points
const player2Points = []

//this turns the cards into a number value
const cardconvert = {
    'Ace' : 1,
    '2' : 2, 
    '3' : 3, 
    '4' : 4, 
    '5' : 5, 
    '6' : 6, 
    '7' : 7, 
    '8' : 8, 
    '9' : 9, 
    '10' : 10, 
    'Jack' : 11, 
    'Queen' : 12, 
    'King' : 13,
    
}

let player1Deck, player2Deck;


class Deck {
    constructor(cards = newDeck()){
        this.cards = cards;
        
        
    }

    get theCardAmount() {
        return this.cards.length
    }

    //returns the top card in the deck
    pop() {
        return this.cards.shift //shift takes first element in array and returns it to us
    }
    

    //loops through all the cards and swaps them with another card to make a random shuffle
    shuffle() {
        for (let i = this.theCardAmount - 1; i > 0; i--) { 
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }   


}


class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}

//returns array of arrays but it flattened into one array
function newDeck() {
    return SUITS.flatMap(suit => {  
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}

const deck = new Deck();
deck.shuffle();


//game starts here, and this function splits the deck evenly between the two players
const middleOfDeck = Math.ceil(deck.theCardAmount / 2)
player1Deck = (deck.cards.slice(0, middleOfDeck))
player2Deck = (deck.cards.slice(middleOfDeck, deck.numberOfCards))
console.log(player1Deck)
console.log(player2Deck)


//takes the first card for each deck and compares them, whoever has the highest value wins
//the round winner gets the cards value added to their score
for (let i = 0; i < 26; i++) {
    const player1Card = player1Deck.pop();
    const player2Card = player2Deck.pop();
    console.log(`round ${i} Player1 card: ${cardconvert[player1Card.value]}`);
    console.log(`player2 card: ${cardconvert[player2Card.value]}`);
    if (cardconvert[player1Card.value] > cardconvert[player2Card.value]) {
        player1Points.push(cardconvert[player2Card.value], cardconvert[player1Card.value]);
        console.log(`player1 wins round ${i} over`);
    }  else if (cardconvert[player2Card.value] > cardconvert[player1Card.value]) {
        player2Points.push(cardconvert[player2Card.value],cardconvert[player1Card.value])
        console.log(`player2 wins round ${i} over`);
    } else {
        console.log("no one wins");
    }
}

//adds each individual players points
function averageOfArray(array) {
    playerSum = array.reduce((previousValue, currentValue) => {
        return previousValue + currentValue

    }); if(typeof array === Number) {
        throw new Error('array must be a number')
    }
    return playerSum;
}



console.log(`Player1 score: ${averageOfArray(player1Points)}
Player2 score: ${averageOfArray(player2Points)}`);


//this shows which player won
let playerOneTotalSum = averageOfArray(player1Points);
let playerTwoTotalSum = averageOfArray(player2Points);
if (playerOneTotalSum > playerTwoTotalSum) {
    console.log(`player1 wins with ${playerOneTotalSum} points`);
} else if (playerTwoTotalSum > playerOneTotalSum) {
  console.log(`player2 wins with ${playerTwoTotalSum} points`);
} else {
    console.log("tie")
}
