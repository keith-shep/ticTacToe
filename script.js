myArr = [   ,    ,    ,
            ,    ,    ,
            ,    ,    ,];

const placeCounter = function(counter, position, arr) {
    if (
        (counter == "x" || counter == "o")
        && position > 0 
        && position < 9
        && arr[position] == undefined
        ) {
            arr.splice(position, 1, counter)
    } else {
        return "Click on an empty spot on the grid";
    }
};


const checkGameOver = function (arr) {

    
}


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

row1 = ["x", "x", "x"]
row2 = ["o", "o", "o"]
row3 = ["x", "o", "x"]
row4 = [   ,    , "x"]
row5 = [   ,    ,    ]

threeInARow = function(row) {

        counterPiece = row[0];

        if (   
                row[0] != undefined &&
                row[0] == row[1] && 
                row[1] == row[2]
        ) {
                return counterPiece;
        }
}


isGridFull = function(grid) {
        occupiedSpaces = grid.filter((space) => space != undefined);
        return occupiedSpaces.length == 9;
}




myListChecker = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            ];


