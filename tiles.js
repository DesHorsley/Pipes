var PipeTiles = {
    blank: {
        tile: [
        '╔═══╗',
        '║░░░║',
        '║░░░║',
        '║░░░║',
        '╚═══╝'
        ],
        frequency: 0,
        clearUp: false,
        clearDown: false,
        clearLeft: false,
        clearRight: false
    },
    straight: {
        tile: [
        '▒▒▒▒▒',
        '═════',
        '     ',
        '═════',
        '▒▒▒▒▒'
        ],
        frequency: 8,
        clearUp: false,
        clearDown: false,
        clearLeft: true,
        clearRight: true
    },
      downLeft: {
        tile: [
        '▒║ ║▒',
        '═╝ ║▒',
        '   ║▒',
        '═══╝▒',
        '▒▒▒▒▒'
        ],
        frequency:4,
        clearUp: true,
        clearDown: false,
        clearLeft: true,
        clearRight: true
    },
    downRight: {
        tile: [
        '▒║ ║▒',
        '▒║ ╚═',
        '▒║   ',
        '▒╚═══',
        '▒▒▒▒▒'
        ],
        frequency: 4,
        clearUp: true,
        clearDown: false,
        clearLeft: false,
        clearRight: true
    },
    upRight:{
        tile: [
        '▒▒▒▒▒',
        '▒╔═══',
        '▒║   ',
        '▒║ ╔═',
        '▒║ ║▒'
        ],
        frequency: 4,
        clearUp: false,
        clearDown: true,
        clearLeft: false,
        clearRight: true
    }
    ,
    upLeft: {
        tile: [
        '▒▒▒▒▒',
        '═══╗▒',
        '   ║▒',
        '═╗ ║▒',
        '▒║ ║▒'
        ],
        frequency: 4,
        clearUp: false,
        clearDown: false,
        clearLeft: true,
        clearRight: false
    },
    teeLeft: {
        tile:[
        '▒║ ║▒',
        '═╝ ║▒',
        '   ║▒',
        '═╗ ║▒',
        '▒║ ║▒'
        ],
        frequency: 2,
        clearUp: true,
        clearDown: true,
        clearLeft: true,
        clearRight: false

    },
    teeRight: {
        tile: [
        '▒║ ║▒',
        '▒║ ╚═',
        '▒║   ',
        '▒║ ╔═',
        '▒║ ║▒'
        ],
        frequency: 2,
        clearUp: true,
        clearDown: true,
        clearLeft: false,
        clearRight: true
    },
    teeDown: {
        tile: [
        '▒▒▒▒▒',
        '═════',
        '     ',
        '═╗ ╔═',
        '▒║ ║▒'
        ],
        frequency: 2,
        clearUp: false,
        clearDown: true,
        clearLeft: true,
        clearRight: true
    },
    teeUp: {
        tile: [
        '▒║ ║▒',
        '═╝ ╚═',
        '     ',
        '═════',
        '▒▒▒▒▒'
        ],
        frequency: 2,
        clearUp: true,
        clearDown: false,
        clearLeft: true,
        clearRight: true
    },
    vertical: {
        tile: [
        '▒║ ║▒',
        '▒║ ║▒',
        '▒║ ║▒',
        '▒║ ║▒',
        '▒║ ║▒'
        ],
        frequency: 8,
        clearUp: true,
        clearDown: true,
        clearLeft: false,
        clearRight: false
    },
    cross: {
        tile: [
        '▒║ ║▒',
        '═╝ ╚═',
        '     ',
        '═╗ ╔═',
        '▒║ ║▒'
        ],
        frequency:1,
        cclearUp: true,
        clearDown: true,
        clearLeft: true,
        clearRight: true
    }
};

if (typeof require !== 'undefined') module.exports = PipeTiles;