// variables
let canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 250;
let y = canvas.height;

let keyW = false;

// alien property
const alienInterval = 1000; // Adjust the interval between alien appearances as needed
let lastAlienTime = Date.now();

// new player
const player = new Character(x, 200, 100, 100);

// count, width, height, canvasWidth, canvasHeight, speed, interval
const obstacleManager = new ObstacleManager(
  1,
  30,
  30,
  canvas.width,
  canvas.height - 68,
  100
);

// background audio
const audio = document.querySelector("#audio");

const power = new Power(50, 50);
const invisibilityPower = new Power(50, 50);
const moreCoinPower = new Power(50, 50);

const platform = new Platform(canvas, ctx, increaseDistance);
const background = new Background(canvas, ctx, increaseDistance);

// missile
// const missile = new Missile(canvas, ctx);
let missile;

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!missile) {
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

  power.draw(ctx);

  invisibilityPower.draw(ctx);

  moreCoinPower.draw(ctx);

  const hasCollinsonOfCharacterWithPower = isCollision(player, power);
  if (hasCollinsonOfCharacterWithPower) {
    addSpeedPower();
    setTimeout(revertSpeedPower, 5000);
  }

  const hasCollinsonOfCharacterWithInvisibilityPower = isCollision(
    player,
    invisibilityPower
  );
  if (hasCollinsonOfCharacterWithInvisibilityPower) {
    addInvisibilityPower();
    setTimeout(revertInvisibiltyPower, 20000);
  }

  const hasCollinsonOfCharacterWithMoreCoinPower = isCollision(
    player,
    moreCoinPower
  );
  if (hasCollinsonOfCharacterWithMoreCoinPower) {
    addMoreCoinPower();
    setTimeout(revertMoreCoinPower, 200000);
  }

  player.draw(ctx);

  obstacleManager.coins.forEach((coin) => {
    coin.draw(ctx);
    coin.update(true); // Update coin animation frame
  });

  // Check for collision with obstacles, coins, and aliens
  checkCollision(
    player,
    obstacleManager.obstacles,
    obstacleManager.coins,
    obstacleManager.aliens,
    missile,
    platform
  );

  // update player position
  // player.x += vx;
  // player.y += vy;

  // Check boundaries to prevent going outside the canvas
  // if (player.x < 0) player.x = 0;
  if (player.y < 0) player.y = 0;
  // if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
  if (player.y + player.height > canvas.height)
    player.y = canvas.height - player.height;

  // Update bullets and check for collisions with aliens
  player.drawBullets(obstacleManager.aliens);

  // Check keys
  if (keyW) {
    // shoot bullets
    player.shoot(-95);
    // move player upward
    player.vy = -currentSpeed;
    player.isGrounded = false;
    player.state = "flying";
  } else if (player.isGrounded) {
    player.state = "walking";
  } else {
    player.state = "idle";
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
  missile.update();

  requestAnimationFrame(animate);
};

const revertSpeedPower = () => {
  background.speed = 8;
  COIN_SPEED = 4.5;
  INCREASE_SPEED_BY = 1;
};

const revertInvisibiltyPower = () => {
  SHOULD_COLLIDE_WITH_OBSTACLE_AND_MISSILE = true;
};

const addInvisibilityPower = () => {
  SHOULD_COLLIDE_WITH_OBSTACLE_AND_MISSILE = false;
};

const revertMoreCoinPower = () => {
  HAS_COIN_POWER_UP = false;
};

const addMoreCoinPower = () => {
  HAS_COIN_POWER_UP = true;
};

const addSpeedPower = () => {
  background.speed = 20;
  COIN_SPEED = 20;
  INCREASE_SPEED_BY = 3;
};
