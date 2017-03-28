if (typeof require !== 'undefined') var Tile = require('./tile.js');

var PipeTiles = {
    blank: new Tile( 0, false, false, false, false ),
    entry: new Tile(0, false, false, false, true),
    straight: new Tile(8, false, false, true, true),
    downLeft: new Tile(4, true, false, true, false),
    downRight: new Tile(4, true, false, false, true),
    upRight: new Tile(4, false, true, false, true),
    upLeft: new Tile(4, false, true, true, false),
    teeLeft: new Tile(2, true, true, true, false),
    teeRight: new Tile(2, true, true, false, true),
    teeDown: new Tile(2, false, true, true, true),
    teeUp: new Tile( 2, true, false, true, true),
    vertical: new Tile(8, true, true, false, false),
    cross: new Tile(1, true, true, true, true)
};

if (typeof require !== 'undefined') module.exports = PipeTiles;