let playerTurn = '';
let symbolTurn = '';
let playerX = '';
let playerCircle = '';
let gameOver = false;
const cells = document.querySelectorAll('.cells');
const form = document.querySelector('.container-players');

form.addEventListener('submit', function (ev) {
  ev.preventDefault();
  startGamePlay();
});

// Iniciar Jogo
const buttonStartGame = document.querySelector('.start-game-btn');
buttonStartGame.addEventListener('click', startGamePlay);

function startGamePlay() {
  playerX = document.getElementById('player-x').value;
  playerCircle = document.getElementById('player-circle').value;
  playerTurn = '';

  if (playerX === '') {
    playerX = 'X';
  }
  if (playerCircle === '') {
    playerCircle = 'O';
  }

  document.querySelector('.container-players').style.display = 'none';
  document.querySelector('.game').style.display = 'flex';
  document.querySelector('.restart-game-btn').style.display = 'flex';
  document.querySelector('.change-name-btn').style.display = 'flex';
  initializeGame();
}

// Reiniciar Jogo
const buttonRestartGame = document.querySelector('.restart-game-btn');
buttonRestartGame.addEventListener('click', function () {
  initializeGame();
});

// Trocar os nomes
const buttonChangeName = document.querySelector('.change-name-btn');
buttonChangeName.addEventListener('click', function () {
  document.getElementById('player-x').value = '';
  document.getElementById('player-circle').value = '';
  document.querySelector('.container-players').style.display = 'flex';
  document.querySelector('.game').style.display = 'none';
  document.querySelector('.restart-game-btn').style.display = 'none';
  document.querySelector('.change-name-btn').style.display = 'none';
  playerX = '';
  playerCircle = '';
  document.getElementById('player-x').focus();
});

function initializeGame() {
  gameOver = false;
  document.getElementById('turn-player').classList.remove('win');
  selectPlayerTurn();
  cells.forEach(function (element) {
    element.innerText = '';
    element.classList.add('cursor-pointer');
    element.classList.remove('win');
  });
  starGame();
}

// Seleciona o player do turno
function selectPlayerTurn() {
  sortedPlayer();
  if (playerTurn === playerX) {
    playerTurn = playerCircle;
  } else if (playerTurn === playerCircle) {
    playerTurn = playerX;
  }
  playerTurn === playerX ? (symbolTurn = 'X') : (symbolTurn = 'O');
  document.querySelector('.situation-game').innerHTML =
    'Vez de: <span id="turn-player"></span>';
  document.getElementById('turn-player').innerText = playerTurn;
}

function sortedPlayer() {
  if (playerTurn === '') {
    const random = Math.random();
    if (random > 0.5) {
      playerTurn = playerX;
    } else {
      playerTurn = playerCircle;
    }
  }
}

function starGame() {
  cells.forEach(function (element) {
    element.addEventListener('click', function addSymbol() {
      if (!element.innerText && !gameOver) {
        element.innerText = symbolTurn;
        element.removeEventListener('click', addSymbol);
        element.classList.remove('cursor-pointer');
        checkWin();
        if (!gameOver) {
          selectPlayerTurn();
        }
      }
    });
  });
}

function checkWin() {
  const cell1 = document.getElementById('cell-1').innerText;
  const cell2 = document.getElementById('cell-2').innerText;
  const cell3 = document.getElementById('cell-3').innerText;
  const cell4 = document.getElementById('cell-4').innerText;
  const cell5 = document.getElementById('cell-5').innerText;
  const cell6 = document.getElementById('cell-6').innerText;
  const cell7 = document.getElementById('cell-7').innerText;
  const cell8 = document.getElementById('cell-8').innerText;
  const cell9 = document.getElementById('cell-9').innerText;

  if (cell1 && cell1 === cell2 && cell2 === cell3) {
    document.getElementById('cell-1').classList.add('win');
    document.getElementById('cell-2').classList.add('win');
    document.getElementById('cell-3').classList.add('win');
    endGame(playerTurn);
    return;
  }
  if (cell4 && cell4 === cell5 && cell5 === cell6) {
    document.getElementById('cell-4').classList.add('win');
    document.getElementById('cell-5').classList.add('win');
    document.getElementById('cell-6').classList.add('win');
    endGame(playerTurn);
    return;
  }
  if (cell7 && cell7 === cell8 && cell8 === cell9) {
    document.getElementById('cell-7').classList.add('win');
    document.getElementById('cell-8').classList.add('win');
    document.getElementById('cell-9').classList.add('win');
    endGame(playerTurn);
    return;
  }
  if (cell1 && cell1 === cell4 && cell4 === cell7) {
    document.getElementById('cell-1').classList.add('win');
    document.getElementById('cell-4').classList.add('win');
    document.getElementById('cell-7').classList.add('win');
    endGame(playerTurn);
    return;
  }
  if (cell2 && cell2 === cell5 && cell5 === cell8) {
    document.getElementById('cell-2').classList.add('win');
    document.getElementById('cell-5').classList.add('win');
    document.getElementById('cell-8').classList.add('win');
    endGame(playerTurn);
    return;
  }
  if (cell3 && cell3 === cell6 && cell6 === cell9) {
    document.getElementById('cell-3').classList.add('win');
    document.getElementById('cell-6').classList.add('win');
    document.getElementById('cell-9').classList.add('win');
    endGame(playerTurn);
    return;
  }
  if (cell1 && cell1 === cell5 && cell5 === cell9) {
    document.getElementById('cell-1').classList.add('win');
    document.getElementById('cell-5').classList.add('win');
    document.getElementById('cell-9').classList.add('win');
    endGame(playerTurn);
    return;
  }
  if (cell3 && cell3 === cell5 && cell5 === cell7) {
    document.getElementById('cell-3').classList.add('win');
    document.getElementById('cell-5').classList.add('win');
    document.getElementById('cell-7').classList.add('win');
    endGame(playerTurn);
    return;
  }
  if (
    cell1 !== '' &&
    cell2 !== '' &&
    cell3 !== '' &&
    cell4 !== '' &&
    cell5 !== '' &&
    cell6 !== '' &&
    cell7 !== '' &&
    cell8 !== '' &&
    cell9 !== ''
  ) {
    endGame('draw');
    return;
  }
}

function endGame(winner) {
  gameOver = true;
  const msg = document.querySelector('.situation-game');

  if (winner === 'draw') {
    msg.innerHTML = 'Deu empate!!! <span id="turn-player"></span>';
  } else {
    msg.innerHTML = 'O vencedor foi <span id="turn-player"></span>';
    document.getElementById('turn-player').classList.add('win');
    document.getElementById('turn-player').innerText = playerTurn;
  }
}
