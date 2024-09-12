const boardSize = 4;
let board = [];

// Initialize the game board
function initBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    board = [];

    for (let i = 0; i < boardSize; i++) {
        board[i] = [];
        for (let j = 0; j < boardSize; j++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.id = `tile-${i}-${j}`;
            gameBoard.appendChild(tile);
            board[i][j] = 0;
        }
    }
}

// Function to render the board
function renderBoard() {
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const tile = document.getElementById(`tile-${i}-${j}`);
            tile.textContent = board[i][j] === 0 ? '' : board[i][j];
            tile.style.backgroundColor = board[i][j] === 0 ? 'lightgray' : '#FFD700';
        }
    }
}

// Function to generate a new tile at a specific position
function generateTileAt(row, col) {
    if (board[row][col] === 0) {
        board[row][col] = Math.random() > 0.5 ? 2 : 4;
        renderBoard();
    } else {
        alert("The selected tile is already occupied!");
    }
}

// Event listener for the generate button
document.getElementById('generate-tile').addEventListener('click', () => {
    const row = parseInt(document.getElementById('row-select').value);
    const col = parseInt(document.getElementById('col-select').value);

    if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) {
        generateTileAt(row, col);
    } else {
        alert("Please enter valid row and column values (0-3).");
    }
});

// Initialize and render the board when the page loads
initBoard();
renderBoard();
