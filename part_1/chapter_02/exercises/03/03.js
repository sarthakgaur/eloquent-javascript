/* Chessboard */

function printChessboard(size) {
    for (let i = 0; i < size; i++) {
        let printSpace = (i % 2 === 0);
        let boardLine = "";
        for (let j = 0; j < size; j++) {
            boardLine += printSpace ? " " : "#";
            printSpace = !printSpace;
        }
        console.log(boardLine);
    }
}

printChessboard(8);

