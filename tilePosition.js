if (typeof require !== 'undefined') var PipeTiles = require('./tiles.js');

function TilePosition(state) {
    this.pipe = state.pipe || PipeTiles.blank;
}

if (typeof require !== 'undefined') module.exports = TilePosition;