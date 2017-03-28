var GameHelper = require('./../gameHelper.js');
var PipeTiles = require('./../tiles.js');
var GameState = require('./../gameState.js');
var TilePosition = require('./../tilePosition.js');

// Setup JSDom
var jsdom = require("jsdom");
var htmlDoc = '<html lang="en-US"></html>';
var tstDocument = jsdom.jsdom(htmlDoc);

describe("getTileWithName", function() {
    it("Returns a tile requested", function() {
        expect(GameHelper.getTileWithName("blank")).toEqual(PipeTiles.blank);
    });
});

describe("randomIntFromInterval", function() {
    it("min and max of 1 returns 1", function() {
        expect(GameHelper.randomIntFromInterval(1,1)).toEqual(1);
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

describe("setTile", function() {
    it("setTile sets an empty tile to a new tile", function() {
        var cross = tstDocument.createElement('pre');
        GameHelper.setTile(cross, PipeTiles.cross.tileDisplay(), tstDocument);
        expect(cross.innerHTML).toEqual(PipeTiles.cross.tileDisplay().join('<br>'));
    });

    it("setTile replaces tiles existing content with new tile content", function() {
        var cross = tstDocument.createElement('pre');
        cross.innerHTML = PipeTiles.blank.tileDisplay().join('<br>');
        GameHelper.setTile(cross, PipeTiles.cross.tileDisplay(), tstDocument);
        expect(cross.innerHTML).toEqual(PipeTiles.cross.tileDisplay().join('<br>'));
    });
});

describe("getNextTile", function() {
    it("Returns the supplied tile as the next tile.", function() {
        var gs = new GameState([GameHelper.getTileBag()[0]]);
        expect(GameHelper.getNextTile(gs).nextTile).toEqual(GameHelper.getTileWithName(GameHelper.getTileBag()[0]));
    });
});

describe('removeChildElements', () => {
    var el = tstDocument.createElement('div');
    var innerTextString = "This should be missing";
    el.appendChild(tstDocument.createTextNode(innerTextString));
    
    it('should remove inner elements of div', () => {
        expect(el.innerHTML).toEqual(innerTextString);

        GameHelper.removeChildElements(el);
        expect(el.innerHTML).toEqual("");
    });
});

describe('setGameHtlm', () => {
    var htmlDoc = `
    <main id="game">
	<button class="start">Start</button>
	<div>
		Next Tile: <pre id="next-tile" class="next-tile"></pre>
	</div>
	<div class="entry">
<pre>

╚═

╔═

</pre>
	</div>
	<div id="board"></div>
</main>`;
    var doc = jsdom.jsdom(htmlDoc);

   it('should set a blank board', () => {
        // Ensure the game element has loaded
        expect(doc.getElementById('game')).toBeTruthy();
        expect(doc.getElementById('board')).toBeTruthy();
        // Ensure the document doesn't have any tiles before render
        expect(doc.getElementsByClassName("tile").length).toBeFalsy();

        var gs = GameHelper.getBlankBoard(new GameState(GameHelper.getTileBag()));
        gs = GameHelper.getNextTile(gs);

        GameHelper.setGameHtml(gs, doc);

        // Ensure the tiles have been rendered.
        expect(doc.getElementsByClassName("tile").length).toBe(36);
    });
});

describe('tileSelected', () => {
    var gs = GameHelper.getBlankBoard(new GameState(GameHelper.getTileBag()));
    var stateAfterClick = GameHelper.tileSelected(gs, 0, 0);
    it('should set the selected tile to the current nextTile value', () => {
        expect(stateAfterClick.tilePositions[0][0]).toEqual(new TilePosition(gs.nextTile));
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
