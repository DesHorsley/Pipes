function Tile(frequency, clearUp, clearDown, clearLeft, clearRight) {
    this.frequency = frequency;
    this.clearUp = clearUp;
    this.clearDown = clearDown;
    this.clearLeft = clearLeft;
    this.clearRight = clearRight;
}

Tile.prototype.tileDisplay = function() {
    var self = this;
    var arr = [];

    var isBlankTile = function() {
        return !self.clearUp && !self.clearDown && !self.clearLeft && !self.clearRight;
    }
    
    var setTopOrBottom = function(clear) {
        if (clear) {
            return '▒║ ║▒';
        } else {
            return '▒▒▒▒▒';
        }
    }

    var setRow2 = function() {
        var row = '';
        if (self.clearLeft && self.clearUp) row += '═╝ ';
        if (self.clearLeft && !self.clearUp) row += '═══';
        if (!self.clearLeft && !self.clearUp) row += '▒╔═';
        if (!self.clearLeft && self.clearUp) row += '▒║ ';

        if (self.clearRight && self.clearUp) row += '╚═';
        if (self.clearRight && !self.clearUp) row += '══';
        if (!self.clearRight && !self.clearUp) row += '╗▒';
        if (!self.clearRight && self.clearUp) row += '║▒';
        return row;
    }

    var setRow3 = function() {
        var row = '';
        if (self.clearLeft)  row += '   '; else row += '▒║ ';
        if (self.clearRight) row += '  '; else row += '║▒';
        return row;
    }

    var setRow4 = function() {
        var row = '';
        if (self.clearLeft && self.clearDown) row += '═╗ ';
        if (self.clearLeft && !self.clearDown) row += '═══';
        if (!self.clearLeft && !self.clearDown) row += '▒╚═';
        if (!self.clearLeft && self.clearDown) row += '▒║ ';

        if (self.clearRight && self.clearDown) row += '╔═';
        if (self.clearRight && !self.clearDown) row += '══';
        if (!self.clearRight && !self.clearDown) row += '╝▒';
        if (!self.clearRight && self.clearDown) row += '║▒';
        return row;
    }

    if (isBlankTile()) {
        return [
        '╔═══╗',
        '║░░░║',
        '║░░░║',
        '║░░░║',
        '╚═══╝'
        ];
    }

    arr.push(setTopOrBottom(self.clearUp));
    arr.push(setRow2());
    arr.push(setRow3());
    arr.push(setRow4());
    arr.push(setTopOrBottom(self.clearDown));
    return arr;
}

if (typeof require !== 'undefined') module.exports = Tile;
