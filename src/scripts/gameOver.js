let gameOver = false;
let restartGame = false; // New flag to indicate whether to restart the game
let gameOver_audio = new Audio("http://www.mario-museum.net/sons/smb_mat.wav");

function setGameOver() {
    gameOver = true;
    mySound.pause();
    gameOver_audio.play();
}

function resetGame() {
    gameOver = false;
    restartGame = false; // Reset the restartGame flag
   
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


function drawGameOverScreen(ctx, canvas) {
    if (isGameOver()) {
        ctx.fillStyle = 'blue';
        ctx.font = '40px Arial';
        ctx.fillText('Game Over', canvas.width / 2 - 100, canvas.height / 2 - 20);
        ctx.font = '20px Arial';
        ctx.fillText('Press Space to Restart', canvas.width / 2 - 130, canvas.height / 2 + 20);
    }
}

