// Create Board object
var board = new Board();

// Create game board with '?' buttons
board.createGameBoard();

// Add values to each button to represent a bomb or no bomb
board.loopThroughGameBoard(board.addValuesToGamePieces);

// Add event listeners to show the actual value when user clicks a button
board.addClickEventToGamePieces();