if (typeof require !== 'undefined') {
    var PipeTiles = require('./tiles.js');
    var GameState = require('./gameState.js');
}

// Come up with a better name than this 
class GameHelper {
    static getTileWithName (tileName) {
        return PipeTiles[tileName];//returns a reference to the object
    }

    static randomIntFromInterval (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    static getTileBag() {
        var tileBag = [];
        for (var key in PipeTiles) {
            if (PipeTiles.hasOwnProperty(key)) {
                for(var tileCount = 0; tileCount < PipeTiles[key].frequency; tileCount++) {
                    tileBag.push(key);
                }
            }
        }
        return tileBag;
    }

    static setTile(tile, tileContent, doc) {
        // Clear out the current content of the element
        while(tile.firstChild) {
            tile.removeChild(tile.firstChild);
        }

        tileContent.forEach((t,i) => {
            tile.appendChild(doc.createTextNode(t));
            if (i !== tileContent.length -1) {
                tile.appendChild(doc.createElement('br'));
            }
        });
    }

    static setBoardHtml(state, board, doc) {
        state.tilePositions.forEach(function(row) {
            var rowDiv = doc.createElement('div');
            row.forEach(function(pos) {
                var tile = doc.createElement('pre');
                tile.className += "tile";
                GameHelper.setTile(tile, pos.tile, doc);
                rowDiv.appendChild(tile);
            })
            board.appendChild(rowDiv);
        } );
    }
    
    static getBlankBoard(state) {
        var tiles = Array(6).fill().map(a => Array(6))
        for (var i = 0; i < 6 ; i++) {
            for (var j = 0; j < 6 ; j++) {
                tiles[i][j] = PipeTiles.blank;
            }   
        }

        return Object.assign({}, state, {tilePositions: tiles});
    }
}

if (typeof require !== 'undefined') module.exports = GameHelper;