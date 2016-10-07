(function(exports) {
    "use strict";

    function Board(cols, rows) {
        this.cols = cols || 8;
        this.rows = rows || 8;
        this.length = this.cols * this.rows;
    }
    exports.Board = Board;

    var boardValues = [ // 1 == bomb, 0 == no bomb
        [0, 0, 0, 1, 1, 0, 0, 0],
        [1, 0, 0, 0, 1, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 0, 0],
    ];

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
        },

        addValuesToGamePieces: function () {
            var i, j;
            for (i = 0; i < this.cols; i++) {
                for (j = 0; j < this.rows; j++) {
                    var id = i.toString() + j.toString();
                    var btnName = 'btn_' + id;
                    var getPiece = document.getElementById(btnName);
                    getPiece.value = boardValues[i][j].toString();
                }
            }
        },

        showValueOfButton: function (liName, btnValue) {
            document.getElementById(liName).innerHTML = "<span>"+ btnValue+ "</span>";
        },

        showValueOfButtonDelegate: function (outter, inner) {
            var self = this;
            return function() {
                self.showValueOfButton(outter, inner)
            }
        },

        addClickEventToGamePieces: function () {
            var i, j;
            var self = this;
            for (i = 0; i < this.cols; i++) {
                for (j = 0; j < this.rows; j++) {
                    var id = i.toString() + j.toString();
                    var liName = 'id_' + id;
                    var btnName = 'btn_' + id;
                    var elem = document.getElementById(btnName);
                    elem.addEventListener("click", self.showValueOfButtonDelegate(liName, elem.value),false);
                }
            }
        }
    };

})(this);
