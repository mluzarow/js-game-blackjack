class BlackJack {
	constructor () {
		this.$hit = document.getElementsByClassName ("btn_hit")[0];
		this.$stand = document.getElementsByClassName ("btn_stand")[0];
		this.$double = document.getElementsByClassName ("btn_double")[0];
		this.$surrender = document.getElementsByClassName ("btn_surrender")[0];
		
		this.$hit.addEventListener ("click", this.buttonHitClick.bind (this));
		this.$stand.addEventListener ("click", this.buttonStandClick.bind (this));
		this.$double.addEventListener ("click", this.buttonDoubleClick.bind (this));
		this.$surrender.addEventListener ("click", this.buttonSurrenderClick.bind (this));
		
		this.$cardAreaPlayer = document.getElementsByClassName ("player_card_area")[0];
		this.$cardAreaHouse = document.getElementsByClassName ("house_wrap")[0];
		
		this.playerCardIndex = 1;
		this.houseCardIndex = 1;
		
		this.houseDeck = new Deck ();
		this.houseDeck.createDeck ();
		this.houseDeck.shuffle ();
		
		this.playerDeck = new Deck ();
	}
	
	dealToPlayer () {
		let deltCard = this.houseDeck.selectFrontCard ();
		this.playerDeck.appendCardBack (deltCard);
		
		this.appendCardNodePlayer (deltCard);
	}
	
	buttonHitClick () {
		this.dealToPlayer ();
	}
	
	buttonStandClick () {
		
	}
	
	buttonDoubleClick () {
		
	}
	
	buttonSurrenderClick () {
		
	}
	
	appendCardNodePlayer (card) {
		let newNode = document.createElement ("img");
		newNode.style.zindex = this.playerCardIndex;
		newNode.src = card.image;
		
		this.$cardAreaPlayer.appendChild (newNode);
	}
}