var TilePosition = require('./../tilePosition.js');
var PipeTiles = require('./../tiles.js');


describe("constructor accepts a tile", function() {
    it("should not contain a null tile", function() {
        var tp = new TilePosition(PipeTiles.blank);
        expect(tp.tile).toBeTruthy();
    });
});
