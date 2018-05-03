



const game = {
    array: ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb',
    'fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb'],
    memory_values: [];
    memory_card_ids: [];
    cards_flipped = [];
}

const card = 'fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb';


for (const card in game.array) {
  for(var i = 0; i < array.length; i++) {

      var item = document.createElement('li');


      item.appendChild(document.createTextNode(array[i]));


      list.appendChild(item);
  }

  return list;
  }


  // Shuffle function from http://stackoverflow.com/a/2450976
  function shuffle(array) {
      var currentIndex = game.array.length, temporaryValue, randomIndex;

      while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = game.array[currentIndex];
          array[currentIndex] = game.array[randomIndex];
          array[randomIndex] = temporaryValue;
      }

      return array;
  }

/* end shuffle function Udacity */

function newBoard() {
	cards_flipped = 0;
	var output = '';
    array.memory_card_shuffle();
	for(var i = 0; i < array.length; i++) {
		output += '<div id="card_'+i+'" onclick="memoryFlipcard(this,\''+array[i]+'\')"></div>';
	}
	document.getElementById('card').innerHTML = output;
}

function memoryFlipcard(card,val) {

	if(card.innerHTML == "" && memory_values.length < 2) {
		card.innerHTML = val;
		if(memory_values.length == 0) {
			memory_values.push(val);
			memory_card_ids.push(card.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_card_ids.push(card.id);
			if(memory_values[0] == memory_values[1]){
				cards_flipped += 2;
				// Clear both arrays
				memory_values = [];
            	memory_card_ids = [];
				// Check to see if the whole board is cleared
				if(cards_flipped == array.length){
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 cards back over
				    var card_1 = document.getElementById(memory_card_ids[0]);
				    var card_2 = document.getElementById(memory_card_ids[1]);
				    card_1.innerHTML = "";
				    card_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            memory_card_ids = [];
				}
				setTimeout(flip2Back, 400);
			}
		}
	}
 }
}
  /*
   * set up the event listener for a card. If a card is clicked:
   *  - display the card's symbol (put this functionality in another function that you call from this one)
   *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
   *  - if the list already has another card, check to see if the two cards match
   *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
   *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
   *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
   *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
   */
