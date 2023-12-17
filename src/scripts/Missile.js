const missileArr = [
  [324, 4, 57, 27],
  [277, 0, 50, 35],
  [217, 0, 58, 31],
  [163, 2, 57, 28],
  [108, 2, 57, 33],
  [48, 4, 63, 29],
  [0, 1, 50, 37],
];

class Missile {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.alertDiv = document.getElementById("alert");
    this.missileSpeed = MISSILE_SPEED;
    this.missileInterval = MISSILE_INTERVAL;
    this.alertTime = ALERT_TIME;
    this.missileTimer = null;
    this.alertTimer = null;
    this.color = "green";
    this.width = 100;
    this.height = 50;
    this.image = new Image();
    this.image.src = "./src/img/missile.png"; // Replace with the path to your missile image
    this.sprites = missileArr.map(
      (coords) => new Sprite(this.image, ...coords)
    );
    this.currentSpriteIndex = 0;
    this.startMissile();
  }

  startMissile() {
    this.x = this.canvas.width;
    this.y = getRandomNum(50,this.canvas.height - 200);
    clearInterval(this.alertTimer);
    this.alertTimer = setTimeout(() => {
      if (!gameOver) {
        this.showAlert();
      }
      setTimeout(() => {
        this.missileTimer = setInterval(() => {
          this.update(); // Call the update method here
          this.moveMissile();
        }, 1000 / 60);
      }, this.alertTime);
    }, this.missileInterval - this.alertTime);
  }

  drawMissile() {
    const currentSprite = this.sprites[this.currentSpriteIndex];
    this.ctx.drawImage(
      currentSprite.spriteImage,
      currentSprite.x,
      currentSprite.y,
      currentSprite.width,
      currentSprite.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  moveMissile() {
    this.x -= this.missileSpeed;
    this.drawMissile();

    if (this.x + 20 < 0) {
      clearInterval(this.missileTimer);
      this.startMissile();
    }
  }

  update() {
    // Increment the sprite index for animation
    const currentTime = Date.now();
    const elapsedTime = currentTime - this.lastFrameTime;

    // Update animation frame if enough time has passed
    if (elapsedTime >= this.animationInterval) {
      this.currentSpriteIndex =
        (this.currentSpriteIndex + 1) % this.sprites.length;
      this.lastFrameTime = currentTime;
    }
  }

  showAlert() {
    this.alertDiv.image = new Image();
    this.alertDiv.image.src = "./src/img/missileWarning";
    this.alertDiv.style.display = "block";
    this.alertDiv.style.top = `${this.y}px`;
    this.alertDiv.style.right = `${this.canvas.width - this.x}px`;

    //  missile lunch sound
    const missileAlertAudio = new Audio(
      "https://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg"
    );
    missileAlertAudio.play();
    const hideAlert = () => {
      this.alertDiv.style.display = "none";
      cancelAnimationFrame(this.alertAnimation);
    };

    const animateAlert = () => {
      this.alertAnimation = requestAnimationFrame(animateAlert);
      if (this.x + this.width < this.canvas.width - 1) {
        // Adjusted condition to hide 1 second before reaching canvas
        hideAlert();
      }
    };

    setTimeout(() => {
      animateAlert();
    }, this.alertTime);
  }
}
