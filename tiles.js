var PipeTiles = {
    blank: {
        tile: [
        '╔═══╗',
        '║░░░║',
        '║░░░║',
        '║░░░║',
        '╚═══╝',
        ],
        frequency: 0
    },
    straight: {
        tile: [
        '▒▒▒▒▒',
        '═════',
        '     ',
        '═════',
        '▒▒▒▒▒',
        ],
        frequency: 8
        
    },
      downLeft: {
        tile: [
        '▒║ ║▒',
        '═╝ ║▒',
        '&nbsp;&nbsp;&nbsp;║▒',
      '═══╝▒',
        '▒▒▒▒▒'
        ],
        frequency:4
    },
    downRight: {
        tile: [
        '▒║ ║▒',
        '▒║ ╚═',
        '▒║   ',
        '▒╚═══',
        '▒▒▒▒▒'
        ],
        frequency: 4
    },
    upRight:{
        tile: [
        '▒▒▒▒▒',
        '▒╔═══',
        '▒║   ',
        '▒║ ╔═',
        '▒║ ║▒'
        ],
        frequency: 4
    }
    ,
    upLeft: {
        tile: [
        '▒▒▒▒▒',
        '═══╗▒',
        '&nbsp;&nbsp;&nbsp;║▒',
        '═╗ ║▒',
        '▒║ ║▒'
        ],
        frequency: 4
    },
    teeLeft: {
        tile:[
        '▒║ ║▒',
        '═╝ ║▒',
        '&nbsp;&nbsp;&nbsp;║▒',
        '═╗ ║▒',
        '▒║ ║▒'
        ],
        frequency: 2
    },
    teeRight: {
        tile: [
        '▒║ ║▒',
        '▒║ ╚═',
        '▒║   ',
        '▒║ ╔═',
        '▒║ ║▒'
        ],
        frequency: 2
    },
    teeDown: {
        tile: [
        '▒▒▒▒▒',
        '═════',
        '     ',
        '═╗ ╔═',
        '▒║ ║▒'
        ],
        frequency: 2
    },
    teeUp: {
        tile: [
        '▒║ ║▒',
        '═╝ ╚═',
        '     ',
        '═════',
        '▒▒▒▒▒'
        ],
        frequency: 2
    },
    verticle: {
        tile: [
        '▒║ ║▒',
        '▒║ ║▒',
        '▒║ ║▒',
        '▒║ ║▒',
        '▒║ ║▒'
        ],
        frequency: 8
    },
    cross: {
        tile: [
        '▒║ ║▒',
        '═╝ ╚═',
        '     ',
        '═╗ ╔═',
        '▒║ ║▒'
        ],
        frequency:1
    }
};