var gameStart = function() {
    console.log('Pipes started');
    var self = this;            
    var tileObj = [];

	self.tiles = document.getElementsByClassName('tile');
    // The tile bag handles the frequencies of the tiles being displayed.
    self.tileBag = GameHelper.getTileBag();

    GameHelper.SetBlankBoard(self.tiles, document);

	// Set up the first tile
	self.nextTileNumber = GameHelper.randomIntFromInterval(1, tileBag.length-1);
    self.nextTile = document.getElementById("next-tile");
    GameHelper.setTile(self.nextTile, GameHelper.getTileWithName(tileBag[nextTileNumber]).tile, document);

    document.onclick = function(e) {
        if(e.target.classList.contains('tile')) {
            var selected = GameHelper.getTileWithName(tileBag[self.nextTileNumber]);

            GameHelper.setTile(e.target, selected.tile, document);

            var gridId = parseInt(e.target.id);
 
            tileObj[gridId] = selected; //tileObj now holds a ref to the object placed there

            self.nextTileNumber = GameHelper.randomIntFromInterval(1, tileBag.length-1);
            
            GameHelper.setTile(
                self.nextTile,
                GameHelper.getTileWithName(tileBag[nextTileNumber]).tile,
                document);
        }

    	if(e.target.classList.contains('start'))
    	{
    		var tile = self.tiles[0];
    		
    		var board = document.getElementsByClassName("board")[0];
            var flow = false;
	    	if (tileObj[0].clearLeft) {
                flow = true;
	    	    console.log("Starting the flow");
                alert(tile.innerHTML.indexOf(' '));
                var str = tile.innerHTML.split();
                str.splice(tile.innerHTML.indexOf(' '),1,"▓").join();
                alert(str);
	    	} else {
                alert("Pipe blocked!");
            }
    	}
    }
 };
