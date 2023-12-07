

// variables
let canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');

let x = 0;
let y = 0;

// new player
const player = new Character(x, y, 50, 50);
const obstacleManager = new ObstacleManager(5, 30, 30, canvas.width, canvas.height);



const animate = ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
      // Draw obstacles
      obstacleManager.draw(ctx);


    // Check for collision
    checkCollision(player, obstacleManager.obstacles);

    // update player position
    player.x += vx;
    player.y += vy;

    // Check boundaries to prevent going outside the canvas
    if (player.x < 0) player.x = 0;
    if (player.y < 0) player.y = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;

    // Draw the player
    player.draw(ctx);

       // Draw the game over screen if the game is over
       drawGameOverScreen(ctx, canvas);

    requestAnimationFrame(animate);
}

animate();