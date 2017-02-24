var gameStart = function(){
	console.log('Pipes started');
    var self = this;
    self.getTileWithName = function (tileName) {
        return PipeTiles[tileName].tile.join('</br>');
    }

    self.randomIntFromInterval = function(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }


	self.tiles = document.getElementsByClassName('tile');
    self.tileBag = [];
    for (var key in PipeTiles) {
        if (PipeTiles.hasOwnProperty(key)) {
            for(var tileCount = 0; tileCount < PipeTiles[key].frequency; tileCount++) {
                this.tileBag.push(key);
            }
        }
    }

	for(var i = 0; i < tiles.length; i++ ) {
		tiles[i].innerHTML = PipeTiles.blank.tile.join('</br>');
	}

	// Set up the first tile
	self.nextTileNumber = randomIntFromInterval(1, tileBag.length-1);
	document.getElementById("next-tile").innerHTML = getTileWithName(tileBag[nextTileNumber]);

    document.onclick = function(e) {
        if(e.target.classList.contains('tile')) {
            e.target.innerHTML = getTileWithName(tileBag[self.nextTileNumber]); 
            self.nextTileNumber = randomIntFromInterval(1, tileBag.length-1);
			document.getElementById("next-tile").innerHTML = getTileWithName(tileBag[self.nextTileNumber]);
        }
    	
    	if(e.target.classList.contains('start'))
    	{
    		var tile = self.tiles[0];
    		//▓▓▓▓
    		var board = document.getElementsByClassName("board")[0];
	    	if (true){//board.innerText.substring(0,29).includes(" ")) {
	    		console.log("Start the flow");
	    		board.innerText = board.innerText.split().splice(11,1,"▓").join(); 

	    	}
    	}
    }
 };