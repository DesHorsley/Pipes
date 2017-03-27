if (typeof require !== 'undefined') var PipeTiles = require('./tiles.js')

// Come up with a better name than this 
class GameHelper {
    static getTileWithName (tileName) {
        return PipeTiles[tileName];//returns a reference to the object
    }

    static randomIntFromInterval (min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    static getTileBag() {
        var tileBag = []
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
        while(tile.firstChild){
            tile.removeChild(tile.firstChild);
        }

        tileContent.forEach(t => {
            tile.appendChild(doc.createTextNode(t));
            tile.appendChild(doc.createElement("BR"));
        });
    }
    
    static SetBlankBoard(tiles, doc) {
        for (var tile of tiles) {
            GameHelper.setTile(tile, PipeTiles.blank.tile, doc)
        }
    }
};

if (typeof require !== 'undefined') module.exports = GameHelper