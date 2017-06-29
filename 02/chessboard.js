var boardSize = 8;
var position = '';

for (x = 0; x < boardSize; x++) {
    for (y = 0; y <= boardSize; y++) {
        if (y % 2 === 0) {
            position += ' ';
        } else {
            position += '#';
        }
    }
    position += '\n';
}


console.log(position);