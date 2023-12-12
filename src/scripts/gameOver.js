let gameOver = false;
let restartGame = false; // New flag to indicate whether to restart the game
let gameOver_audio = new Audio("http://www.mario-museum.net/sons/smb_mat.wav");

function setGameOver() {
    gameOver = true;
    mySound.pause();
    gameOver_audio.play();
    drawGameOverScreen();
}

function resetGame() {
    collisionCount = 0;
    gameOver = false;
    restartGame = false; // Reset the restartGame flag
    distanceTravelled = 0;
    coinsCollected = 0;
    background.position = 0;
    obstacleManager.reset();
    removeDialogContainer();
    // Coin.reset();
   
}

function isGameOver() {
    return gameOver;
}

function setRestartGame() {
    restartGame = true;
}

function shouldRestartGame() {
    return restartGame;
}


// draw gameOver screen after game over
function drawGameOverScreen() {
    
        // Blur the canvas
        canvas.style.filter = 'blur(30px)';

        // Create the dialog box
        const dialogContainer = document.createElement('div');
        dialogContainer.classList.add("dialogContainer");
        dialogContainer.innerHTML = `
            <p class = "flew">You Flew</p>
            <p class = "flew__Distance">${distanceTravelled}m</p>
            <p class="flew__coinCollectedWhole">
            <span class="flew__coinCollected_phrase">And Collected</span>
            <br>
            <span class="flew__coinCollected_coin">Coins: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${coinsCollected} \u{1F4B0}</span>
            </p>
    
            <p class="flew_restart">Press Space to Restart</p>
        `;
        
        document.body.appendChild(dialogContainer);

        // Remove the scorecard element
  const scorecardElement = document.getElementById('scorecard');
  if (scorecardElement) {
    scorecardElement.remove();
  }
    
}

// remove gameover screen if need restart
const removeDialogContainer = (()=>{

    const dialogContainer = document.querySelector(".dialogContainer");
    // Reset the blur on the canvas
    canvas.style.filter = 'blur(0)';
    
    dialogContainer.remove();
});





