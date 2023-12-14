

// variables
let canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 250;
let y = canvas.height;

let keyW = false;

// alien property
const alienInterval = 1000; // Adjust the interval between alien appearances as needed
let lastAlienTime = Date.now();

// new player
const player = new Character(x, 200, 50, 50);

// count, width, height, canvasWidth, canvasHeight, speed, interval
const obstacleManager = new ObstacleManager(1, 30, 30, canvas.width, canvas.height-68, 100);

// background audio
const audio=document.querySelector("#audio")

const platform = new Platform(canvas, ctx, increaseDistance);
const background = new Background(canvas, ctx, increaseDistance);

// missile
// const missile = new Missile(canvas, ctx);
let missile;

const animate = ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(!missile) {
      missile = new Missile(canvas, ctx);
    }

    // draw platform
    platform.draw();
    platform.update();

    // Draw background
    background.update();
    background.draw();

    
    // Draw obstacles
    obstacleManager.draw(ctx);

    // Update obstacles
    obstacleManager.update();

    // Draw obstacles
  obstacleManager.update();

  obstacleManager.coins.forEach((coin) => {
    coin.update(); // Update coin animation frame
    coin.draw(ctx);
});


    // Check for collision with obstacles, coins, and aliens
    checkCollision(player, obstacleManager.obstacles, obstacleManager.coins, obstacleManager.aliens, missile, platform);

    // update player position
    // player.x += vx;
    // player.y += vy;

    // Check boundaries to prevent going outside the canvas
    // if (player.x < 0) player.x = 0;
    if (player.y < 0) player.y = 0;
    // if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;

    // Draw the player
    player.draw(ctx);

    // Update bullets and check for collisions with aliens
    player.drawBullets(obstacleManager.aliens);

    // Check keys
    if(keyW) {
      // shoot bullets
      player.shoot(-95);
      // move player upward
      player.vy=-currentSpeed;
      player.isGrounded = false;
      } 

    // Update aliens
    // obstacleManager.updateAliens();

    // Generate aliens at a certain interval
    const currentTime = Date.now();
    if (currentTime - lastAlienTime > alienInterval) {
        obstacleManager.generateAliens();
        lastAlienTime = currentTime;
    }

    // Draw aliens
    obstacleManager.aliens.forEach((alien) => {
        alien.draw(ctx);
    });

    // Draw missiles
  missile.drawMissile();


    requestAnimationFrame(animate);
}

// window.addEventListener("resize", (()=>{
//   canvas.width =  window.innerWidth;
//   canvas.height =  window.innerHeight;
// }))
