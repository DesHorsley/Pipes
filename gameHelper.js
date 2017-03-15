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

    // TODO: Avoid innerHtml
    static SetBlankBoard(tiles) {
        for (var tile of tiles) {
            tile.innerHTML =  PipeTiles.blank.tile.join('</br>');
        }
    }
};