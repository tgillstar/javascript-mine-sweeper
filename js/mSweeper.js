(function(exports) {
    "use strict";


    function Board(cols, rows) {
        this.cols = cols || 8;
        this.rows = rows || 8;
        this.length = this.cols * this.rows;
    }
    exports.Board = Board;

    Board.prototype = {

        createGameBoard: function () {
            var i, j;
            var gameBoard = document.createElement("ul");

            for (i = 0; i < this.cols; i++) {
                for (j = 0; j < this.rows; j++) {
                    var piecePlacement = document.createElement("li");
                    var gamePiece = document.createElement("button");
                    var gamePieceText = document.createTextNode("?");
                    var liName = 'id_' + i.toString() + j.toString();
                    var btnName = 'btn_' + i.toString() + j.toString();
                    gamePiece.appendChild(gamePieceText);
                    gamePiece.setAttribute("id", btnName);
                    gamePiece.setAttribute("class", "questionBtn");
                    piecePlacement.setAttribute("id", liName);
                    piecePlacement.appendChild(gamePiece);
                    gameBoard.appendChild(piecePlacement);
                }
                var lineBreak = document.createElement("br");
                gameBoard.appendChild(lineBreak);
            }
            document.getElementById("boardgame").appendChild(gameBoard);
        }
    };

    // Create game board with '?' buttons
    var board = new Board();
    board.createGameBoard();

})(this);

/*var board = [ // 1 == bomb, 0 == no bomb
  [0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0],
];

function createGameBoard() {
 var i, j;
 var gameBoard = document.createElement("ul");

  for (i = 0; i < board.length; i++) {
    for (j = 0; j < 8; j++) {
      var piecePlacement = document.createElement("li");
      var gamePiece = document.createElement("button");
      var gamePieceText = document.createTextNode("?");
      var liName = 'id_' + i.toString() + j.toString();
      var btnName = 'btn_' + i.toString() + j.toString();
      gamePiece.appendChild(gamePieceText);
      gamePiece.setAttribute("id", btnName);
      gamePiece.setAttribute("class", "questionBtn");
      piecePlacement.setAttribute("id", liName);
      piecePlacement.appendChild(gamePiece);
      gameBoard.appendChild(piecePlacement);
    }
    var lineBreak = document.createElement("br");
    gameBoard.appendChild(lineBreak);
  }
  document.getElementById("boardgame").appendChild(gameBoard);
}

function addValuesToGamePieces() {
 var i, j;
  for (i = 0; i < board.length; i++) {
    for (j = 0; j < 8; j++) {
      var id = i.toString() + j.toString();
      var btnName = 'btn_' + id;
      var getPiece = document.getElementById(btnName);
      getPiece.value = board[i][j].toString();
    }
  }
}

function showValueOfButton(liName, btnValue) {
  document.getElementById(liName).innerHTML = "<span>"+ btnValue+ "</span>";
}

function showValueOfButtonDelegate(outter, inner) {
  return function() {
    showValueOfButton(outter, inner)
  }
}

function addClickEventToGamePieces() {
   (function () {
    var i, j;
     for (i = 0; i < board.length; i++) {
       for (j = 0; j < 8; j++) {
         var id = i.toString() + j.toString();
         var liName = 'id_' + id;
         var btnName = 'btn_' + id;
         var elem = document.getElementById(btnName);
         elem.addEventListener("click", showValueOfButtonDelegate(liName, elem.value),false);
       }
     }
   }()); 
}

// Create game board with '?' buttons
createGameBoard(); 

// Add values to each button to represent a bomb or no bomb
addValuesToGamePieces();

// Add event listeners to show the actual value when user clicks a button
addClickEventToGamePieces();
*/