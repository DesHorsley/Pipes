var GameHelper = require('./../gameHelper.js');
var PipeTiles = require('./../tiles.js');
var GameState = require('./../gameState.js');

// Setup JSDom
var jsdom = require("jsdom");
var htmlDoc = '<html lang="en-US"></html>';
var tstDocument = jsdom.jsdom(htmlDoc);


describe("getTileWithName", function() {
    it("Returns a tile requested", function() {
        expect(GameHelper.getTileWithName("blank")).toEqual(PipeTiles.blank);
    });
});

describe("getTileBag", function() {
    it("Does not contain a blank tile", function() {
        var blankTileCount = GameHelper.getTileBag().filter(function(tile){return tile === 'blank'}).length;
        expect(blankTileCount).toEqual(0);
    });
    it("One cross tile", function() {
        var crossTileCount = GameHelper.getTileBag().filter(function(tile){return tile === 'cross'}).length;
        expect(crossTileCount).toEqual(1);
    });
});

describe("getNextTile", function() {
    it("Returns the supplied tile as the next tile.", function() {
        var gs = new GameState([GameHelper.getTileBag()[0]]);
        expect(GameHelper.getNextTile(gs).nextTile).toEqual(GameHelper.getTileWithName(GameHelper.getTileBag()[0]));
    });
});

describe("getBlankBoard", function() {
    it("generates 6 rows of tiles", function() {
        var newState = GameHelper.getBlankBoard();
        expect(newState.tilePositions.length).toEqual(6);
    });

    it("generates 36 tiles", function() {
        var newState = GameHelper.getBlankBoard();
        expect(newState.tilePositions.reduce(function(accum, row) { return accum + row.length},0)).toEqual(36);
    });
});

describe("setTile", function() {
    it("setTile sets an empty tile to a new tile", function() {
        var cross = tstDocument.createElement('pre');
        GameHelper.setTile(cross, PipeTiles.cross.tile, tstDocument);
        expect(cross.innerHTML).toEqual(PipeTiles.cross.tile.join('<br>'));
    });

    it("setTile replaces tiles existing content with new tile content", function() {
        var cross = tstDocument.createElement('pre');
        cross.innerHTML = PipeTiles.blank.tile.join('<br>');
        GameHelper.setTile(cross, PipeTiles.cross.tile, tstDocument);
        expect(cross.innerHTML).toEqual(PipeTiles.cross.tile.join('<br>'));
    });
});

describe("randomIntFromInterval", function() {
    it("min and max of 1 returns 1", function() {
        expect(GameHelper.randomIntFromInterval(1,1)).toEqual(1);
    });
});
