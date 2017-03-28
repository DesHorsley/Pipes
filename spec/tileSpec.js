var Tile = require('./../tile.js');
var PipeTiles = require('./../tiles.js');

describe("tileDisplay", function() {
     it("can generate a blank tile", function() {
        var pipe = PipeTiles.blank;
        var t = new Tile(pipe.frequency, pipe.clearUp, pipe.clearDown, pipe.clearLeft, pipe.clearRight);
        expect(t.tileDisplay()).toEqual([
            '╔═══╗',
            '║░░░║',
            '║░░░║',
            '║░░░║',
            '╚═══╝']);
    });

    it("can generate a vertical tile", function() {
        var pipe = PipeTiles.vertical;
        var t = new Tile(pipe.frequency, pipe.clearUp, pipe.clearDown, pipe.clearLeft, pipe.clearRight);
        expect(t.tileDisplay()).toEqual([
            '▒║ ║▒',
            '▒║ ║▒',
            '▒║ ║▒',
            '▒║ ║▒',
            '▒║ ║▒']);
    });

    it("can generate a straight tile", function() {
        var pipe = PipeTiles.straight;
        var t = new Tile(pipe.frequency, pipe.clearUp, pipe.clearDown, pipe.clearLeft, pipe.clearRight);
        expect(t.tileDisplay()).toEqual([
            '▒▒▒▒▒',
            '═════',
            '     ',
            '═════',
            '▒▒▒▒▒']);
    });

    it("can generate a downLeft tile", function() {
        var pipe = PipeTiles.downLeft;
        var t = new Tile(pipe.frequency, pipe.clearUp, pipe.clearDown, pipe.clearLeft, pipe.clearRight);
        expect(t.tileDisplay()).toEqual([
            '▒║ ║▒',
            '═╝ ║▒',
            '   ║▒',
            '═══╝▒',
            '▒▒▒▒▒']);
    });

    it("can generate a downRight tile", function() {
        var pipe = PipeTiles.downRight;
        var t = new Tile(pipe.frequency, pipe.clearUp, pipe.clearDown, pipe.clearLeft, pipe.clearRight);
        expect(t.tileDisplay()).toEqual([
            '▒║ ║▒',
            '▒║ ╚═',
            '▒║   ',
            '▒╚═══',
            '▒▒▒▒▒']);
    });

    it("can generate a upRight tile", function() {
        var pipe = PipeTiles.upRight;
        var t = new Tile(pipe.frequency, pipe.clearUp, pipe.clearDown, pipe.clearLeft, pipe.clearRight);
        expect(t.tileDisplay()).toEqual([
            '▒▒▒▒▒',
            '▒╔═══',
            '▒║   ',
            '▒║ ╔═',
            '▒║ ║▒']);
    });

    it("can generate a upLeft tile", function() {
        var pipe = PipeTiles.upLeft;
        var t = new Tile(pipe.frequency, pipe.clearUp, pipe.clearDown, pipe.clearLeft, pipe.clearRight);
        expect(t.tileDisplay()).toEqual([
            '▒▒▒▒▒',
            '═══╗▒',
            '   ║▒',
            '═╗ ║▒',
            '▒║ ║▒']);
    });

    it("can generate a teeLeft tile", function() {
        var pipe = PipeTiles.teeLeft;
        var t = new Tile(pipe.frequency, pipe.clearUp, pipe.clearDown, pipe.clearLeft, pipe.clearRight);
        expect(t.tileDisplay()).toEqual([
            '▒║ ║▒',
            '═╝ ║▒',
            '   ║▒',
            '═╗ ║▒',
            '▒║ ║▒']);
    });

    it("can generate a teeRight tile", function() {
        var pipe = PipeTiles.teeRight;
        var t = new Tile(pipe.frequency, pipe.clearUp, pipe.clearDown, pipe.clearLeft, pipe.clearRight);
        expect(t.tileDisplay()).toEqual([
            '▒║ ║▒',
            '▒║ ╚═',
            '▒║   ',
            '▒║ ╔═',
            '▒║ ║▒']);
    });

    it("can generate a teeDown tile", function() {
        var pipe = PipeTiles.teeDown;
        var t = new Tile(pipe.frequency, pipe.clearUp, pipe.clearDown, pipe.clearLeft, pipe.clearRight);
        expect(t.tileDisplay()).toEqual([
            '▒▒▒▒▒',
            '═════',
            '     ',
            '═╗ ╔═',
            '▒║ ║▒']);
    });

    it("can generate a teeDown tile", function() {
        var pipe = PipeTiles.teeUp;
        var t = new Tile(pipe.frequency, pipe.clearUp, pipe.clearDown, pipe.clearLeft, pipe.clearRight);
        expect(t.tileDisplay()).toEqual([
            '▒║ ║▒',
            '═╝ ╚═',
            '     ',
            '═════',
            '▒▒▒▒▒']);
    });

    it("can generate a vertical tile", function() {
        var pipe = PipeTiles.vertical;
        var t = new Tile(pipe.frequency, pipe.clearUp, pipe.clearDown, pipe.clearLeft, pipe.clearRight);
        expect(t.tileDisplay()).toEqual([
            '▒║ ║▒',
            '▒║ ║▒',
            '▒║ ║▒',
            '▒║ ║▒',
            '▒║ ║▒']);
    });

    it("can generate a cross tile", function() {
    var pipe = PipeTiles.cross;
    var t = new Tile(pipe.frequency, pipe.clearUp, pipe.clearDown, pipe.clearLeft, pipe.clearRight);
    expect(t.tileDisplay()).toEqual([
            '▒║ ║▒',
            '═╝ ╚═',
            '     ',
            '═╗ ╔═',
            '▒║ ║▒']);
    });
});