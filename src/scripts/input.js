
let vx = 0;
let vy = 0;
let currentSpeed = SPEED;

addEventListener("keydown", (e)=>{
    if (isGameOver()) return; // Don't handle input if the game is over

   
    if(e.code == 'KeyW'){
        player.vy=-currentSpeed;
        
    } 
    // console.log(e.code);
    // console.log(vx);

});
addEventListener("keyup", (e)=>{
        
    if(e.code == 'KeyW'){
        player.vy = 0;
    }
   
if (e.code === 'Space') {
    resetGame();
    // if (shouldRestartGame()) {
    //     // If should restart, reset the game
    //     resetGame();
    // } else {
    //     // Otherwise, set the restart flag
    //     setRestartGame();
    // }
}
});
