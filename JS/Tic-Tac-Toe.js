const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#StatusText");
const restartBtn = document.getElementById("RestartBtn");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
initializeGame();

function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true;
}
function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");

  if (options[cellIndex] != "" || !running) {
    return;
  }

  updateCell(this, cellIndex);
  checkWinner();
}

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function changePlayer() {
  if (currentPlayer == "X") {
    currentPlayer = "O";
  } else if (currentPlayer != "X") {
    currentPlayer = "X";
  }
  statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
  let roundWon = false;
  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const CellA = options[condition[0]];
    const CellB = options[condition[1]];
    const CellC = options[condition[2]];

    if (CellA == "" || CellB == "" || CellC == "") {
      continue;
    }
    if (CellA == CellB && CellB == CellC) {
      roundWon = true;
      break;
    }
  }
  if (roundWon == true) {
    statusText.textContent = `${currentPlayer} won`;
    running = false;
  } else if (!options.includes("")) {
    statusText.textContent = "Draw";
    running = false;
  } else {
    changePlayer();
  }
}

function restartGame() {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer}'s turn`;
  cells.forEach((cell) => (cell.textContent = ""));
  running = true;
}
