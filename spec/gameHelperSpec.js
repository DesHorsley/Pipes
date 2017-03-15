var GameHelper = require('./../gameHelper.js');
var PipeTiles = require('./../tiles.js');

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

// TODO: Avoid innerHtml
// describe("setBlankBoard", function() {
//     it("inner text of each tile is a blank tile", function() {
//         var listOfTiles = [document.createElement('div'), document.createElement('div')];
//         var blankDiv = document.createElement('div');
//         blankDiv.innerHTML = PipeTiles.blank.tile.join('</br>');
//         GameHelper.SetBlankBoard(listOfTiles);
//         var countOfBlankTiles = listOfTiles.filter(function(t) {
//             return t.innerText === blankDiv.innerText
//         }).length
//         expect(countOfBlankTiles).toEqual(2);
//     });
// });
