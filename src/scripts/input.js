
let vx = 0;
let vy = 0;
let currentSpeed = SPEED;

addEventListener("keydown", (e)=>{
    if (isGameOver()) return; // Don't handle input if the game is over

    if(e.code == 'KeyD') vx=currentSpeed;
    if(e.code == 'KeyA') vx=-currentSpeed;
    if(e.code == 'KeyW') vy=-currentSpeed;
    if(e.code == 'KeyS') vy=currentSpeed;
    // console.log(e.code);
    // console.log(vx);

});
addEventListener("keyup", (e)=>{
        // if(e.code == 'KeyD') vx=0;
    // if(e.code == 'KeyA') vx=0;  
    if(e.code == 'KeyW') vy=0;
    if(e.code == 'KeyS') vy=0;
if (e.code === 'Space') {
    if (shouldRestartGame()) {
        // If should restart, reset the game
        resetGame();
    } else {
        // Otherwise, set the restart flag
        setRestartGame();
    }
}
});
