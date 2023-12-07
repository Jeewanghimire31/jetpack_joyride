
let vx = 0;
let vy = 0;

addEventListener("keydown", (e)=>{
    if(e.code == 'KeyD') vx=SPEED;
    if(e.code == 'KeyA') vx=-SPEED;
    if(e.code == 'KeyW') vy=-SPEED;
    if(e.code == 'KeyS') vy=SPEED;
    // console.log(e.code);
    // console.log(vx);

    if (e.code === 'Space') {
        if (shouldRestartGame()) {
            // If should restart, reset the game
            resetGame();
            player.x = 0;
            player.y = 0;
            obstacleManager.reset();
            animate();
        } else {
            // Otherwise, set the restart flag
            setRestartGame();
        }
    }
});

addEventListener("keyup", (e)=>{
    if(e.code == 'KeyD') vx=0;
    if(e.code == 'KeyA') vx=0;  
    if(e.code == 'KeyW') vy=0;
    if(e.code == 'KeyS') vy=0;
});