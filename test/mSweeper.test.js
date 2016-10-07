var expect = chai.expect;
var should = chai.should();

describe("Mine Sweeper", function() {
    describe("Game board constructor", function() {
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

    describe("#createGameBoard", function() {
        beforeEach(function() {
            //Will run before all tests in this block
            this.board = new Board();
        });
        afterEach(function() {
            //Will run after all tests in this block
            delete this.board;
        });

        it("boardgame div element is in the DOM", function () {
            expect(document.getElementById("boardgame")).to.not.be.null;
        });

        it("should have a variable i", function() {
            this.board.createGameBoard();
        });

        it("first placeholder (li) to be on the board", function () {
            expect(document.getElementById("id_00")).to.not.be.null;
        });

        it("first game piece (? button) to be on the board", function () {
            expect(document.getElementById("btn_00")).to.not.be.null;
        });
    });
});
/*
describe("Cow", function() {
  describe("constructor", function() {
    it("should have a default name", function() {
      var cow = new Cow();
      expect(cow.name).to.equal("Anon cow");
    });

    it("should set cow's name if provided", function() {
      var cow = new Cow("Kate");
      expect(cow.name).to.equal("Kate");
    });
  });

  describe("#greets", function() {
    it("should throw if no target is passed in", function() {
      expect(function() {
        (new Cow()).greets();
      }).to.throw(Error);
    });

    it("should greet passed target", function() {
      var greetings = (new Cow("Kate")).greets("Baby");
      expect(greetings).to.equal("Kate greets Baby");
    });
  });
});*/

/*
 var expect = chai.expect;

 describe('recursion-divs', function() {
 // create html string that will be inserted into DOM
 var html = '<div></div><div></div><div></div>';

 // append html to body node
 $(document.body).append(html);

 // run my original test
 it('should return false when there are fewer than 5 divs', function() {
 var result = containsFiveOrMoreDivs(document.body);
 expect(result).to.equal(false);
 });

 // create a clone of the DOM, and append more divs to it
 var $domClone = $(document.body).clone();
 $domClone.append(html);

 // test this new DOM
 it('should return true when there are more than 5 divs', function() {
 // jQuery returns an array of DOM nodes, so use 0 index
 expect(containsFiveOrMoreDivs($domClone[0])).to.equal(true);
 });
 });
*/