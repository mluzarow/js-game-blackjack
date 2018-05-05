class Deck {
	constructor () {
		this.cards = [];
	}
	
	createDeck () {
		// Create black cards 
		for (var i = 2; i < 4; i++) {
			for (var k = 1; k < 14; k++) {
				this.cards.push (this.createCard (k, i, 0));
			}
		}
		
		// Create red cards 
		for (var i = 0; i < 2; i++) {
			for (var k = 1; k < 14; k++) {
				this.cards.push (this.createCard (k, i, 1));
			}
		}
	}
	
	createCard (value, suite, color) {
		return new Card (value, suite, color);
	}
	
	appendCardFront (card) {
		this.cards.unshift (card);
	}
	
	appendCardBack (card) {
		this.cards.push (card);
	}
	
	shuffle () {
		var shuffledCards = [];
		var len = this.cards.length;
		
		for (var i = 0; i < len; i++) {
			let index = Math.floor(Math.random() * (this.cards.length));
			
			shuffledCards.push (this.cards[index]);
			
			this.cards.splice (index, 1);
		}
		
		this.cards = shuffledCards;
	}
	
	selectRandomCard () {
		
	}
	
	selectFrontCard () {
		return (this.cards.shift ());
	}
	
	selectBackCard () {
		return (this.cards.pop ());
	}
	
	toString () {
		var textOutput = [];
		
		for (var i = 0; i < this.cards.length; i++) {
			textOutput.push (this.cards[i].text);
		}
		
		return (textOutput);
	}
}
