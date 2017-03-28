if (typeof require !== 'undefined') var PipeTiles = require('./tiles.js');

function TilePosition(tile) {
    this.tile = tile;
    this.beingFilled = false;
}

if (typeof require !== 'undefined') module.exports = TilePosition;