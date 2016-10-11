var expect = chai.expect;
var should = chai.should();

describe("Mine Sweeper", function() {
    describe("Game board constructor", function() {
        afterEach(function() {
            //Will run after all tests in this block
            var myNode = document.getElementById("boardgame");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
        });

        it("should have a default columns and rows", function() {
            var board = new Board();
            expect(board.cols).to.equal(8);
            expect(board.rows).to.equal(8);
        });

        it("should set columns and rows if provided", function() {
            var board = new Board(10,18);
            expect(board.cols).to.equal(10);
            expect(board.rows).to.equal(18);
        });
    });

    describe("Helper functions:", function() {
        describe("#forLoopThroughItems", function(){
            beforeEach(function() {
                //Will run before all tests in this block
                this.board = new Board();
            });

            it("boardgame div element is in the DOM", function () {
                expect(document.getElementById("boardgame")).to.not.be.null;
            });

            it("should loop through basic gameboard", function() {
                function printMe (i, j) {
                    console.log(i,j);
                }
                this.board.forLoopThroughItems(printMe);
            });
        });
    });

    describe("Game board Mocked", function() {
        describe("#createGameBoard", function() {
            beforeEach(function() {
                //Will run before all tests in this block
                this.board = new Board();
                this.board.createGameBoard();
            });
            afterEach(function() {
                //Will run after all tests in this block
                var myNode = document.getElementById("boardgame");
                while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
                }
            });

            it("first placeholder (li) to be on the board", function () {
                expect(document.getElementById("id_00")).to.not.be.null;
            });

            it("first game piece (? button) to be on the board", function () {
                expect(document.getElementById("btn_00")).to.not.be.null;
            });
        });

        describe("#addValuesToGamePieces", function() {
            beforeEach(function() {
                //Will run before all tests in this block
                this.board = new Board();
                this.board.createGameBoard();
                this.board.forLoopThroughItems(this.board.addValuesToGamePieces);
            });
            afterEach(function() {
                //Will run after all tests in this block
                var myNode = document.getElementById("boardgame");
                while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
                }
            });

            it("game piece (btn_00) value should be 0 on default 8x8 board", function () {
                document.getElementById("btn_00").value.should.equal('0');
            });

            it("game piece (btn_33) value should be 1 on default 8x8 board", function () {
                document.getElementById("btn_33").value.should.equal('1');
            });
        });
    });
});