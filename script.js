let currentPlayer = 'X';

function makeMove(cell) {
  if (cell.textContent === '') {
    cell.textContent = currentPlayer;
    if (checkWinner()) {
      document.getElementById('status').textContent = `${currentPlayer} wins!`;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const cells = [...document.querySelectorAll('.cell')];
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  return winningCombos.some(combo =>
    combo.every(index => cells[index].textContent === currentPlayer)
  );
}
