if (typeof require !== 'undefined') var TilePosition = require('./tilePosition.js');

function GameState(tileBag = {}) {
    this.flowState = GameState.FlowStateEnum.NOTFLOWING;
    this.tilePositions = [];
    this.nextTile = undefined;
    this.tileBag = tileBag;
}

GameState.prototype.inFlowState = function (flowState) {
    return this.flowState === flowState;
}

GameState.FlowStateEnum = {
    NOTFLOWING: 'Not Flowing',
    FLOWING: 'Flowing',
    Leaked: 'Leaked'
}

if (typeof require !== 'undefined') module.exports = GameState;