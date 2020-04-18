// const myArr = new Array(9);

myArr = ['x',    , 'o',
            , 'o',    ,
            ,    ,    ,];

const placeCounter = function (counter, position, arr) {
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