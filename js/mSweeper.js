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
        forLoopThroughItems: function (performThisWork){
            var self = this;
            for (var i = 0; i < this.cols; i++) {
                for (var j = 0; j < this.rows; j++) {
                    performThisWork(i, j, self);
                }
            }
        },

        setElementAttributes: function (element, attributesArr) {
            for (var item in attributesArr) {
                element.setAttribute(attributesArr[item].name, attributesArr[item].value)
            }
            return element;
        },

        createGameBoard: function () {
            var gameBoard = document.createElement("ul");
            for (var i = 0; i < this.cols; i++) {
                for (var j = 0; j < this.rows; j++) {
                    var piecePlacement = document.createElement("li"),
                    gamePiece = document.createElement("button"),
                    gamePieceText = document.createTextNode("?"),
                    gamePieceName = 'id_' + i.toString() + j.toString(),
                    btnName = 'btn_' + i.toString() + j.toString();
                    gamePiece.appendChild(gamePieceText);

                    var gamePieceAttrs = [{name: 'id', value: btnName}, {name: 'class', value: 'questionBtn'}];
                    gamePiece = this.setElementAttributes(gamePiece, gamePieceAttrs);

                    var piecePlacementAttrs = [{name: 'id', value: gamePieceName}];
                    piecePlacement = this.setElementAttributes(piecePlacement, piecePlacementAttrs);
                    piecePlacement.appendChild(gamePiece);
                    gameBoard.appendChild(piecePlacement);
                }
                var lineBreak = document.createElement("br");
                gameBoard.appendChild(lineBreak);
            }
            document.getElementById("boardgame").appendChild(gameBoard);
        },

        addValuesToGamePieces: function (i, j, self) {
            var id = i.toString() + j.toString(),
                btnName = 'btn_' + id,
                getPiece = document.getElementById(btnName);
            getPiece.value = boardValues[i][j].toString();
        },

        showValueOfButton: function (gamePieceName, btnValue) {
            document.getElementById(gamePieceName).innerHTML = "<span>"+ btnValue+ "</span>";
        },

        showValueOfButtonDelegate: function (outter, inner) {
            var self = this;
            return function() {
                self.showValueOfButton(outter, inner)
            }
        },

        addClickEventToGamePieces: function (i, j, self) {
            var id = i.toString() + j.toString(),
                gamePieceName = 'id_' + id,
                btnName = 'btn_' + id,
                elem = document.getElementById(btnName);
            elem.addEventListener("click", self.showValueOfButtonDelegate(gamePieceName, elem.value),false);
        }
    };

})(this);
