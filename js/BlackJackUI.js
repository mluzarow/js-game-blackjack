/**
 * UI controller that works along side the blackjack core controller.
 */
class BlackJackUI {
	/**
	 * Constructor for class BlackJackUI.
	 */
	constructor () {
		/**
		 * @type {BlackJack} blackjack core controller
		 */
		this.game = new BlackJack ();
		
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
		
		/**
		 * @var {Element} $betValueWrap current bet / bet setup section wrap
		 * @var {Element} $currentBet   current bet box during bet setup
		 * @var {Element} $betValue     displayed bet box after setup
		 * @var {Element} $playerFunds  total player funds box
		 */
		this.$betValueWrap = document.getElementsByClassName ("bet_value_wrap")[0];
		this.$currentBet = document.getElementsByClassName ("bet_box_value")[0];
		this.$betValue = document.getElementsByClassName ("bet_value")[0];
		this.$playerFunds = document.getElementsByClassName ("player_funds_value")[0];
		
		// Bind the control buttons
		let $hit = document.getElementsByClassName ("btn_hit")[0];
		let $stand = document.getElementsByClassName ("btn_stand")[0];
		let $double = document.getElementsByClassName ("btn_double")[0];
		let $surrender = document.getElementsByClassName ("btn_surrender")[0];
		
		$hit.addEventListener ("click", this.buttonHitClick.bind (this));
		$stand.addEventListener ("click", this.buttonStandClick.bind (this));
		$double.addEventListener ("click", this.buttonDoubleClick.bind (this));
		$surrender.addEventListener ("click", this.buttonSurrenderClick.bind (this));
		
		// Bind bet setup arrow controls
		let $arrowUp = document.getElementsByClassName ("arrow_up")[0];
		let $arrowDown = document.getElementsByClassName ("arrow_down")[0];
		
		$arrowUp.addEventListener ("click", this.buttonArrowUpClick.bind (this));
		$arrowDown.addEventListener ("click", this.buttonArrowDownClick.bind (this));
		
		// Bind bet setup "lock in" button
		let $lock_in = document.getElementsByClassName ("lock_in")[0];
		
		$lock_in.addEventListener ("click", this.buttonLockInClick.bind (this));
		
		// Populate bet and funds value boxes
		this.$currentBet.innerHTML = 10;
		this.$betValue.innerHTML = 10;
		this.$playerFunds.innerHTML = this.game.totalFunds;
	}
	
	/**
	 * Handles click of the "hit" control button. Adds a card to the player,
	 * checks if the player has busted and, if not, adds a card to the house.
	 */
	buttonHitClick () {
		let deltCard = this.game.deal ("player");
		this.addCard (deltCard, "player");
		
		let status = this.game.getPlayerStatus ();
		
		if (status === "bust") {
			this.$controls.classList.add ("hide");
			this.$messages.classList.add ("bust");
		}
		
		deltCard = this.game.deal ("house");
		this.addCard (deltCard, "house");
	}
	
	buttonStandClick () {
		
	}
	
	buttonDoubleClick () {
		
	}
	
	buttonSurrenderClick () {
		
	}
	
	/**
	 * Handles the click of the bet setup "lock in" button which finalizes the
	 * current bet and starts the round of blackjack.
	 */
	buttonLockInClick () {
		this.$betValue.innerHTML = this.game.currentBet;
		this.$betValueWrap.classList.add ("locked");
		
		this.$playerFunds.innerHTML = this.game.placeBet ();
		
		let deltCards = this.game.startGame ();
		this.addCard (deltCards["player"][0], "player");
		this.addCard (deltCards["player"][1], "player");
		this.addCard (deltCards["house"][0], "house");
		this.addCard (deltCards["house"][1], "house");
		
		this.$playerTotal.innerHTML = this.game.playerTotal;
		
		this.$controls.classList.remove ("hide");
		this.$playerTotal.classList.remove ("hide");
	}
	
	/**
	 * Handles the click of the bet setup down arrow.
	 */
	buttonArrowUpClick () {
		let betStatus = this.game.increaseBet ();
		
		if (betStatus !== false) {
			this.$currentBet.innerHTML = betStatus;
		}
	}
	
	/**
	 * Handles the click of the bet setup down arrow.
	 */
	buttonArrowDownClick () {
		let betStatus = this.game.decreaseBet ();
		
		if (betStatus !== false) {
			this.$currentBet.innerHTML = betStatus;
		}
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
			this.$playerTotal.innerHTML = this.game.playerTotal;
		} else {
			this.$cardAreaHouse.appendChild (card.$element);
		}
	}
}