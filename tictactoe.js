let currentMove, gameActive, squaresLeft

let squares = document.querySelectorAll("td");
let currentPlayer = document.querySelector('#current');
let currentTextDisplay = document.getElementById('currentText');
//initialize game
function newGame(){
  gameActive = true;
  currentMove = true; //true:false, X:O
  currentText.textContent = 'Current Player:';
  currentPlayer.textContent = 'X';
  squaresLeft = 9;

  //clears board
  for (let i = 0; i < squares.length; i++){
    squares[i].textContent = null;
  };
}


//Marks board
function marker(i) {
  if(!squares[i].textContent && gameActive) {
    squares[i].textContent = currentPlayer.textContent;
    checkBoard(currentPlayer.textContent);
    if(gameActive){
      currentMove = !currentMove;
      changePlayer();
    }
  }
}

// alternate players
function changePlayer() {
  if(currentMove) {
    currentPlayer.textContent = 'X';
  }else {
    currentPlayer.textContent = 'O';
  }
}

//checks board to see if winning move
function checkBoard(player) {

  const winningCombo = 
  [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (let i = 0; i < winningCombo.length; i++) {
    let result = winningCombo[i].every(function(x){
      return squares[x].textContent === player;
    })

    if(result) {
      gameActive = false
      currentTextDisplay.textContent = 'Winner is:';
      //setTimeout(50000,alert(`'${player}' wins!`));
      break;
    }
  }
  squaresLeft--
  if(!squaresLeft) {
      gameActive = false
      currentTextDisplay.textContent = "TIED GAME!";
      currentPlayer.textContent = null;
    }
}






// for loop to add event listeners to all the squares
squares.forEach(function(square) {
  square.addEventListener('click', function(event){
    marker(parseInt(event.target.id));
  })
});


newGame()




