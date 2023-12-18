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

// new character
const character = new Character(x, 200, 100, 100);

// count, width, height, canvasWidth, canvasHeight, speed, interval
const obstacleManager = new ObstacleManager(
  1,
  80,
  80,
  canvas.width,
  canvas.height - 68,
  100
);

// background audio
const audio = document.querySelector("#audio");

const power = new Power(50, 50, "speed");
const invisibilityPower = new Power(50, 50, "invisibility");
const moreCoinPower = new Power(50, 50, "moreCoin");

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

  const hasCollinsonOfCharacterWithPower = isCollision(character, power);
  if (hasCollinsonOfCharacterWithPower) {
    power.x = -1;
    addSpeedPower();
    setTimeout(revertSpeedPower, 5000);
  }

  const hasCollinsonOfCharacterWithInvisibilityPower = isCollision(
    character,
    invisibilityPower
  );
  if (hasCollinsonOfCharacterWithInvisibilityPower) {
    invisibilityPower.x = -1;
    addInvisibilityPower();
    setTimeout(revertInvisibiltyPower, 20000);
  }

  const hasCollinsonOfCharacterWithMoreCoinPower = isCollision(
    character,
    moreCoinPower
  );
  if (hasCollinsonOfCharacterWithMoreCoinPower) {
    moreCoinPower.x = -1;
    addMoreCoinPower();
    setTimeout(revertMoreCoinPower, 20000);
  }

  character.draw(ctx);

  obstacleManager.coins.forEach((coin) => {
    coin.draw(ctx);
    coin.update(true); // Update coin animation frame
  });

  // Check for collision with obstacles, coins, and aliens
  checkCollision(
    character,
    obstacleManager.obstacles,
    obstacleManager.coins,
    obstacleManager.aliens,
    missile,
    platform
  );

  // update character position
  // character.x += vx;
  // character.y += vy;

  // Check boundaries to prevent going outside the canvas
  // if (character.x < 0) character.x = 0;
  if (character.y < 0) character.y = 0;
  // if (character.x + character.width > canvas.width) character.x = canvas.width - character.width;
  if (character.y + character.height > canvas.height)
    character.y = canvas.height - character.height;

  // Update bullets and check for collisions with aliens
  character.drawBullets(obstacleManager.aliens);

  // Check keys
  if (keyW) {
    // shoot bullets
    character.shoot(-95);
    // move character upward
    character.vy = -currentSpeed;
    character.isGrounded = false;
    character.state = "flying";
  } else if (character.isGrounded) {
    character.state = "walking";
  } else {
    character.state = "idle";
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
    alien.update(ctx);
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
