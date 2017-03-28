var gameStart = function() {
    console.log('Pipes started');
    var self = this;            

    self.gameState = GameHelper.getBlankBoard(new GameState(GameHelper.getTileBag()));
    self.gameState = GameHelper.getNextTile(self.gameState);

    self.gameElement = document.getElementById("game");
    GameHelper.setGameHtml(self.gameState, self.gameElement, document);

    document.onclick = function(e) {
        if(e.target.classList.contains('tile')) {
            var row = e.target.parentElement.id;
            var col = e.target.id;
            self.gameState = GameHelper.tileSelected(self.gameState, row, col);

            GameHelper.setGameHtml(self.gameState, self.gameElement, document);
        }

        // Eventually the flow will begin on a timer, for the mean time, this button will start the flow for testing purposes.
    	if(e.target.classList.contains('start'))
    	{
            self.tileObj = [];
	        self.tiles = document.getElementsByClassName('tile');
    		var tile = self.tiles[0];
    		
    		var board = document.getElementsByClassName("board")[0];
            var flow = false;
	    	if (self.tileObj[0].clearLeft) {
                flow = true;
	    	    console.log("Starting the flow");
                console.log((tile.innerHTML.indexOf(' ')));
                var str = tile.innerHTML.split();
                str.splice(tile.innerHTML.indexOf(' '),1,"▓").join();
                console.log(str);
	    	} else {
                console.log("Pipe blocked!");
            }
    	}
    }
 };
