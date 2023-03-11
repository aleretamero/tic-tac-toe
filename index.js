let playerTurn = '';
let symbolTurn = '';
let playerX = '';
let playerCircle = '';
let gameOver = false;
const cells = document.querySelectorAll('.cells');

// Trocar tema
const theme = document.querySelector('.theme-select');
theme.addEventListener('click', function () {
  const root = document.querySelector(':root');
  if (theme.dataset.theme === 'dark') {
    root.style.setProperty('--color-primary', '#f1f5f9');
    root.style.setProperty('--color-secundary', '#212529');
    root.style.setProperty('--color-primary-strong', '#fff');
    root.style.setProperty('--color-secundary-strong', '#000');
    theme.dataset.theme = 'light';
  } else {
    root.style.setProperty('--color-primary', '#212529');
    root.style.setProperty('--color-secundary', '#f1f5f9');
    root.style.setProperty('--color-primary-strong', '#000');
    root.style.setProperty('--color-secundary-strong', '#fff');
    theme.dataset.theme = 'dark';
  }
});

// Iniciar Jogo
const buttonStartGame = document.querySelector('.start-game-btn');
buttonStartGame.addEventListener('click', function () {
  playerX = document.getElementById('player-x').value;
  playerCircle = document.getElementById('player-circle').value;
  playerTurn = '';

  if (playerX === '' || playerCircle === '') {
    alert('Insira o nome dos jogadores para iniciar');
    return;
  } else {
    document.querySelector('.container-players').style.display = 'none';
    document.querySelector('.game').style.display = 'flex';
    document.querySelector('.restart-game-btn').style.display = 'flex';
    document.querySelector('.change-name-btn').style.display = 'flex';
    initializeGame();
  }
});

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
});

function initializeGame() {
  gameOver = false;
  document.getElementById('turn-player').classList.remove('win');
  playerTurnChange();
  cells.forEach(function (element) {
    element.innerText = '';
    element.classList.add('cursor-pointer');
    cells.forEach(function (el) {
      el.classList.remove('win');
    });
  });
  starGame();
}

// Troca o player do turno
function playerTurnChange() {
  if (playerTurn === '') {
    const random = Math.random();
    if (random > 0.5) {
      playerTurn = playerX;
    } else {
      playerTurn = playerCircle;
    }
  } else if (playerTurn === playerX) {
    playerTurn = playerCircle;
  } else if (playerTurn === playerCircle) {
    playerTurn = playerX;
  }
  playerTurn === playerX ? (symbolTurn = 'X') : (symbolTurn = 'O');
  document.querySelector('.situation-game').innerHTML =
    'Vez de: <span id="turn-player"></span>';
  document.getElementById('turn-player').innerText = playerTurn;
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
          playerTurnChange();
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
  if (winner === 'draw') {
    document.querySelector('.situation-game').innerHTML =
      'Deu empate!!! <span id="turn-player"></span>';
    document.getElementById('turn-player').classList.add('win');
  } else {
    document.querySelector('.situation-game').innerHTML =
      'O vencedor foi <span id="turn-player"></span>';
    document.getElementById('turn-player').classList.add('win');
    document.getElementById('turn-player').innerText = playerTurn;
  }
}
