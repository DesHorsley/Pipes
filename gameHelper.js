if (typeof require !== 'undefined') {
    var PipeTiles = require('./tiles.js');
    var GameState = require('./gameState.js');
}

// Come up with a better name than this 
class GameHelper {
    static getTileWithName (tileName) {
        return PipeTiles[tileName]; // returns a reference to the object
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
        GameHelper.removeChildElements(tile);

        tileContent.forEach((t,i) => {
            tile.appendChild(doc.createTextNode(t));
            if (i !== tileContent.length -1) {
                tile.appendChild(doc.createElement('br'));
            }
        });
    }

    static getNextTile(state) {
        var nextTileNumber = GameHelper.randomIntFromInterval(0, state.tileBag.length - 1)
        return Object.assign({}, state, { nextTile: GameHelper.getTileWithName(state.tileBag[nextTileNumber])});
    }

    static removeChildElements(element) {
        while(element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    static setGameHtml(state, doc) {
        var nextTilePre = doc.getElementById('next-tile');
        GameHelper.removeChildElements(nextTilePre);
        GameHelper.setTile(nextTilePre, state.nextTile.tile, doc);

        var board = doc.getElementById('board');
        GameHelper.removeChildElements(board);
        state.tilePositions.forEach(function(row, rowIndex) {
            var rowDiv = doc.createElement('div');
            rowDiv.setAttribute("id", rowIndex);
            row.forEach(function(pos, posIndex) {
                var tile = doc.createElement('pre');
                tile.setAttribute("id", posIndex);
                tile.className += "tile";
                GameHelper.setTile(tile, pos.tile, doc);
                rowDiv.appendChild(tile);
            })
            board.appendChild(rowDiv);
        } );
    }

    static tileSelected(state, row, col) {
        var newState = Object.assign({}, state);
        newState.tilePositions[row][col] = newState.nextTile; // This feels wrong, revisit.
        newState = GameHelper.getNextTile(newState)
        return newState;
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