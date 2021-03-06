function factory(face, suit) {
    let faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }
    
    if (Object.keys(suits).includes(suit) == false) {
        throw new Error('Invalid suit.');
    }

    if (faces.includes(face) == false) {
        throw new Error('Invalid face.');
    }
        
    let card = {
        face, 
        suit: suits[suit], 
        toString() {
            return this.face + this.suit;
        }
    };
    return card;
}


let card = factory('10', 'H');
console.log(card.toString());