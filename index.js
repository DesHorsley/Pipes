var gameStart = function(){
    console.log('Pipes started');
    var self = this;            
    var tileObj = [];
    self.getTileWithName = function (tileName) {
        return PipeTiles[tileName];//returns a reference to the object
        //return PipeTiles[tileName].tile.join('</br>');
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
	document.getElementById("next-tile").innerHTML = getTileWithName(tileBag[nextTileNumber]).tile.join('</br>');

    document.onclick = function(e) {
        if(e.target.classList.contains('tile')) {
            var selected = getTileWithName(tileBag[self.nextTileNumber]);

            e.target.innerHTML = selected.tile.join('</br>'); //displays the tile in the grid area
            var gridId = parseInt(e.target.id);
 
            tileObj[gridId] = selected; //tileObj now holds a ref to the object placed there

            self.nextTileNumber = randomIntFromInterval(1, tileBag.length-1);
	        document.getElementById("next-tile").innerHTML = getTileWithName(tileBag[nextTileNumber]).tile.join('</br>');
        }

    	if(e.target.classList.contains('start'))
    	{
    		var tile = self.tiles[0];
    		//▓▓▓▓
    		var board = document.getElementsByClassName("board")[0];
            var flow = false;
	    	if (tileObj[0].clearLeft){//board.innerText.substring(0,29).includes(" ")) {
                flow = true;
	    	    console.log("Starting the flow");
                alert(tile.innerHTML.indexOf(' '));
                //alert(board.innerText.split().splice(11,1,"▓"));
                var str = tile.innerHTML.split();
                str.splice(tile.innerHTML.indexOf(' '),1,"▓").join();
                alert(str);
                //tile.innerHTML = str;
	    	} else {
                alert("Pipe blocked!");
            }
    	}
    }
 };
