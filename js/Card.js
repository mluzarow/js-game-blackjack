/**
 * Represents one playing card in a deck of cards.
 */
class Card {
	/**
	 * Constructor for class Card.
	 */
	constructor (value, suite, color) {
		/**
		 * @var {Int} value card value with joker being 11, queen 12, and king 13
		 * @var {Int} suite card suite 0: diamond, 1: heart, 2: club, 4: spade
		 * @var {Int} color card color 0: black, 1: red
		 */
		this.value = value;
		this.suite = suite;
		this.color = color;
		
		/**
		 * @type {String} card info in text form E.G. "Black ace of spades"
		 */
		this.text = this.toString ();
		
		this.image = this.toImageSource ();
	}
	
	toString () {
		var cardText = "";
		
		if (this.color === CardColors.BLACK) {
			cardText += "Black ";
		} else {
			cardText += "Red ";
		}
		
		if (this.value === 1) {
			cardText += "ace ";
		} else if (this.value === 2) {
			cardText += "two ";
		} else if (this.value === 3) {
			cardText += "three ";
		} else if (this.value === 4) {
			cardText += "four ";
		} else if (this.value === 5) {
			cardText += "five ";
		} else if (this.value === 6) {
			cardText += "six ";
		} else if (this.value === 7) {
			cardText += "seven ";
		} else if (this.value === 8) {
			cardText += "eight ";
		} else if (this.value === 9) {
			cardText += "nine ";
		} else if (this.value === 10) {
			cardText += "ten ";
		} else if (this.value === 11) {
			cardText += "jack ";
		} else if (this.value === 12) {
			cardText += "queen ";
		} else if (this.value === 13) {
			cardText += "king ";
		}
		
		if (this.suite === CardSuite.DIAMONDS) {
			cardText += "of diamonds";
		} else if (this.suite === CardSuite.HEARTS) {
			cardText += "of hearts";
		} else if (this.suite === CardSuite.CLUBS) {
			cardText += "of clubs";
		} else if (this.suite === CardSuite.SPADES) {
			cardText += "of spades";
		}
		
		return (cardText);
	}
	
	toImageSource () {
		var cardImageSource = "img/card_b_";
		
		if (this.suite === CardSuite.DIAMONDS) {
			cardImageSource += "d";
		} else if (this.suite === CardSuite.HEARTS) {
			cardImageSource += "h";
		} else if (this.suite === CardSuite.CLUBS) {
			cardImageSource += "c";
		} else if (this.suite === CardSuite.SPADES) {
			cardImageSource += "s";
		}
		
		if (this.value === 1) {
			cardImageSource += "a";
		} else if (this.value === 11) {
			cardImageSource += "j";
		} else if (this.value === 12) {
			cardImageSource += "q";
		} else if (this.value === 13) {
			cardImageSource += "k";
		} else {
			cardImageSource += this.value;
		}
		
		cardImageSource += "_large.png"
		
		return (cardImageSource);
	}
}
