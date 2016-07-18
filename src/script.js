//Ryan Pando, Sam Goldsmith
var board = document.createElement("div");
for (var i = 0; i < 9; i++) {
  var row = document.createElement('div');
    for (var j = 0; j < 9; j++) {
      var square = document.createElement('div');
        if (i % 2 === j % 2) {
          square.style.backgroundColor = 'black';
          square.id = 'square';
          square.style.width = '11.1%';
          square.style.paddingBottom = '11.1%';
          square.style.cssFloat = 'left';
        } else {
          square.style.backgroundColor = 'red';
          square.id = 'square';
          square.style.width = '11.1%';
          square.style.paddingBottom = '11.1%';
          square.style.cssFloat = 'left';
        }
      row.appendChild(square);
    }
  board.appendChild(row);
}
document.body.appendChild(board);
