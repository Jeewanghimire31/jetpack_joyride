let vx = 0;
let vy = 0;
let currentSpeed = SPEED;

addEventListener("keydown", (e) => {
  if (isGameOver()) return; // Don't handle input if the game is over

  if (e.code == "KeyW") {
    keyW = true;
  }
});
addEventListener("keyup", (e) => {
  if (e.code == "KeyW") {
    keyW = false;
    // character.vy = 0;
  }

  if (e.code === "Space") {
    mySound.play();
    if (gameOver) {
      resetGame();
    }
  }
});
