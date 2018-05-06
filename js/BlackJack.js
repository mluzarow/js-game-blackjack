/**
 * Blackjack game and game UI controller.
 */
class BlackJack {
	constructor () {
		let $hit = document.getElementsByClassName ("btn_hit")[0];
		let $stand = document.getElementsByClassName ("btn_stand")[0];
		let $double = document.getElementsByClassName ("btn_double")[0];
		let $surrender = document.getElementsByClassName ("btn_surrender")[0];
		
		$hit.addEventListener ("click", this.buttonHitClick.bind (this));
		$stand.addEventListener ("click", this.buttonStandClick.bind (this));
		$double.addEventListener ("click", this.buttonDoubleClick.bind (this));
		$surrender.addEventListener ("click", this.buttonSurrenderClick.bind (this));
		
		this.$controls = document.getElementsByClassName ("control_wrap")[0];
		
		this.$cardAreaPlayer = document.getElementsByClassName ("player_card_area")[0];
		this.$cardAreaHouse = document.getElementsByClassName ("house_card_area")[0];
		
		this.$playerTotal = document.getElementsByClassName ("player_total")[0];
		
		this.mainDeck = new Deck ();
		this.mainDeck.createDeck ();
		this.mainDeck.shuffle ();
		
		this.playerDeck = new Deck ();
		this.houseDeck = new Deck ();
		
		this.playerTotal = 0;
		this.houseTotal = 0;
		
		this.startGame ();
	}
	
	startGame () {
		this.dealToHouse ();
		this.dealToPlayer ();
		this.dealToHouse (true);
		this.dealToPlayer ();
		
		this.$playerTotal.classList.remove ("hide");
	}
	
	dealToHouse (flipped = false) {
		let deltCard = this.mainDeck.selectFrontCard ();
		
		this.houseDeck.appendCardBack (deltCard);
		this.appendCardNodeHouse (deltCard, flipped);
		
		this.houseTotal += deltCard.value;
	}
	
	dealToPlayer () {
		let deltCard = this.mainDeck.selectFrontCard ();
		this.playerDeck.appendCardBack (deltCard);
		
		this.appendCardNodePlayer (deltCard);
		
		this.playerTotal += deltCard.value;
		this.$playerTotal.innerHTML = this.playerTotal;
	}
	
	buttonHitClick () {
		this.dealToPlayer ();
		this.dealToHouse ();
		
		if (this.playerTotal > 21) {
			this.$controls.classList.add ("hide");
		}
	}
	
	buttonStandClick () {
		
	}
	
	buttonDoubleClick () {
		
	}
	
	buttonSurrenderClick () {
		
	}
	
	appendCardNodeHouse (card, flipped = false) {
		if (flipped === true) {
			card.flip ();
		}
		
		this.$cardAreaHouse.appendChild (card.$element);
	}
	
	appendCardNodePlayer (card) {
		this.$cardAreaPlayer.appendChild (card.$element);
	}
}