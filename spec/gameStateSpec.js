var GameState = require('./../gameState.js');

describe("gameStateConstructor", function() {
    it("Empty constructor starts state with NotFlowing", function() {
        var gs = new GameState();
        expect(gs.flowState).toEqual(GameState.FlowStateEnum.NOTFLOWING);
    });
});