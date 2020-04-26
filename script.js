



/* ----------------------------------------------------------------------------------- */

const playerSettings = {
        currentPlayer: 'x',
        setCurrentPlayer: function() {
                this.currentPlayer == 'x' ? this.currentPlayer = 'o' : this.currentPlayer = 'x';
        },
        getCurrentPlayer: function() {
                return this.currentPlayer;
        }
}


const placeCounter = function(counter, position, arr) {
    if (
        (counter == "x" || counter == "o")
        && position >= 0 
        && position <= 8
        && arr[position] == undefined
        ) {
            arr.splice(position, 1, counter)
    } else {
        return "Click on an empty spot on the grid";
    }
};


checkThreeInARow = function(row) {

        counterPiece = row[0];

        if (   
                row[0] != undefined &&
                row[0] == row[1] && 
                row[1] == row[2]
        ) {
                return counterPiece;
        }
}

printEndGameMessage = function name(params) {
        
}

isGridFull = function(grid) {
        occupiedSpaces = grid.filter((space) => space != undefined);
        return occupiedSpaces.length == 9;
}



row1 = ["x", "x", "x"]
row2 = ["o", "o", "o"]
row3 = ["x", "o", "x"]
row4 = [   ,    , "x"]
row5 = [   ,    ,    ]



myArr = [   ,    ,    ,
        ,    ,    ,
        ,    ,    ,];

arr1 = ["x", "o", "x",
        "o", "x",    ,
        "x",    , "o",];

arr2 = ["o",    , "x",
        "o", "x",    ,
        "o",    , "x",];

arr3 = ["x", "o", "x",
        "o", "x", "o",
        "o", "x", "o",];

arr4 = ["x",    , "x",
        "o", "o", "o",
        "x",    , "o",];

arr5 = ["x", "x", "x",
        "o",    , "o",
        "x", "o", "o",];


successRows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ];

getRowPermutations = function(grid) {
        let inner = [];
        let outer = [];

        for (let j = 0; j < 8; j++) {
                for (let i = 0; i < 3; i++) { inner.push(grid[successRows[j][i]]) }
                outer.push(inner);
                inner = [];    
        }
        return outer;
}
