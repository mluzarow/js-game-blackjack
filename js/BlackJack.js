/**
 * Blackjack game controller.
 */
class BlackJack {
	/**
	 * Constructor for class BlackJack.
	 */
	constructor () {
		/**
		 * @var {Int} totalFunds total funds available to the player
		 * @var {Int} currentBet current bet active for this round
		 */
		this.totalFunds = 2000;
		this.currentBet = 10;
		
		/**
		 * @var {Deck} mainDeck   deck of all cards used for this game
		 * @var {Deck} playerDeck player's hand
		 * @var {Deck} houseDeck  house's hand
		 */
		this.mainDeck = new Deck ();
		this.playerDeck = new Deck ();
		this.houseDeck = new Deck ();
		
		/**
		 * @var {Int} playerTotal total value of the player's hand
		 * @var {Int} houseTotal  total value of the house's hand
		 */
		this.playerTotal = 0;
		this.houseTotal = 0;
		
		// Set up the main deck
		this.mainDeck.createDeck ();
		this.mainDeck.shuffle ();
	}
	
	/**
	 * Gets the players current game status.
	 * 
	 * @return {String} tag describing the player's current game status
	 */
	getPlayerStatus () {
		if (this.playerTotal > 21) {
			status = "bust";
		} else if (this.playerTotal > this.houseTotal) {
			status = "winning";
		} else {
			status = "losing";
		}
		
		return (status);
	}
	
	/**
	 * Starts the round of blackjack by dealing 2 cards to each party.
	 * 
	 * @return {Dictionary} dict of all the cards delt
	 */
	startGame () {
		let deltCards = {"house" : {}, "player" : {}};
		
		this.playerTotal = 0;
		this.houseTotal = 0;
		this.playerDeck = new Deck ();
		this.houseDeck = new Deck ();
		
		deltCards["house"][0] = this.deal ("house");
		deltCards["player"][0] = this.deal ("player");
		deltCards["house"][1] = this.deal ("house");
		deltCards["player"][1] = this.deal ("player");
		
		return (deltCards);
	}
	
	/**
	 * Deals a card from the main deck to the target.
	 * 
	 * @param  {String} target individual that receives the delt card
	 * 
	 * @return {Card} card selected from the main deck
	 */
	deal (target) {
		let deltCard = this.mainDeck.selectFrontCard ();
		
		if (target === "player") {
			this.playerDeck.appendCardBack (deltCard);
			this.playerTotal += deltCard.value;
		} else {
			this.houseDeck.appendCardBack (deltCard);
			this.houseTotal += deltCard.value;
		}
		
		return (deltCard);
	}
	
	/**
	 * Place the current bet.
	 * 
	 * @return {Int} player's total after the current bet
	 */
	placeBet () {
		this.totalFunds -= this.currentBet;
		
		return (this.totalFunds);
	}
	
	/**
	 * Increases the current active bet by given amount.
	 * 
	 * @return {Int|Bool} the current bet value or false if invalid operation
	 */
	increaseBet (bet = 10) {
		let status = false;
		
		if (this.currentBet <= this.totalFunds) {
			this.currentBet += bet
			status = this.currentBet;
		}
		
		return (status);
	}
	
	/**
	 * Decreases the current active bet by given amount.
	 * 
	 * @return {Int|Bool} the current bet value or false if invalid operation
	 */
	decreaseBet (bet = 10) {
		let status = false;
		
		if (this.currentBet > bet) {
			this.currentBet -= bet
			status = this.currentBet;
		}
		
		return (status);
	}
	
	/**
	 * Player wins current bet amount.
	 * 
	 * @return {Number} currenty player total
	 */
	win () {
		this.totalFunds += this.currentBet;
		
		return this.totalFunds;
	}
}
