if (typeof require !== 'undefined') var TilePosition = require('./tilePosition.js');

function GameState() {
    this.initialise();
}

GameState.prototype.initialise = function() {
    this.flowState = GameState.FlowStateEnum.NOTFLOWING;
    this.tilePositions = [];
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