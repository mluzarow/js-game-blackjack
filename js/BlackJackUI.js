/**
 * UI controller that works along side the blackjack core controller.
 */
class BlackJackUI {
	/**
	 * Constructor for class BlackJackUI.
	 */
	constructor () {
		/**
		 * @type {Element} player move input buttons wrap
		 */
		this.$controls = document.getElementsByClassName ("control_wrap")[0];
		
		/**
		 * @type {Element} game sttaus message output
		 */
		this.$messages = document.getElementsByClassName ("messages")[0];
		
		/**
		 * @var {Element} $cardAreaHouse  card display area for the house
		 * @var {Element} $cardAreaPlayer card display area for the player
		 * @var {Element} $playerTotal    total card value banner for player cards
		 */
		this.$cardAreaPlayer = document.getElementsByClassName ("player_card_area")[0];
		this.$cardAreaHouse = document.getElementsByClassName ("house_card_area")[0];
		this.$playerTotal = document.getElementsByClassName ("player_total")[0];
		
		// Bind the control buttons
		let $hit = document.getElementsByClassName ("btn_hit")[0];
		let $stand = document.getElementsByClassName ("btn_stand")[0];
		let $double = document.getElementsByClassName ("btn_double")[0];
		let $surrender = document.getElementsByClassName ("btn_surrender")[0];
		
		$hit.addEventListener ("click", this.buttonHitClick.bind (this));
		$stand.addEventListener ("click", this.buttonStandClick.bind (this));
		$double.addEventListener ("click", this.buttonDoubleClick.bind (this));
		$surrender.addEventListener ("click", this.buttonSurrenderClick.bind (this));
		
		/**
		 * @type {BlackJack} blackjack core controller
		 */
		this.game = new BlackJack ();
	}
	
	/**
	 * Handles click of the "hit" control button. Adds a card to the player,
	 * checks if the player has busted and, if not, adds a card to the house.
	 */
	buttonHitClick () {
		let deltCard = this.game.deal ("player");
		this.addCard (deltCard, "player");
		
		let status = this.game.playerStatus ();
		
		if (status === "bust") {
			this.$controls.classList.add ("hide");
			this.$messages.classList.add ("bust");
		}
		
		let deltCard = this.game.deal ("house");
		this.addCard (deltCard, "house");
	}
	
	/**
	 * Append a card element to the HTML div for the card area requested.
	 * 
	 * @param {Card}   card   card object representing the card to append
	 * @param {String} target indicates which party's card area to append to
	 */
	addCard (card, target) {
		if (target === "player") {
			this.$cardAreaPlayer.appendChild (card.$element);
		} else {
			this.$cardAreaHouse.appendChild (card.$element);
		}
	}
}