const imgArr = [
  [0, 3, 146, 146],
  [145, 5, 123, 135],
  [277, 7, 80, 137],
  [54, 160, 64, 134],
  [140, 159, 90, 136],
  [233, 151, 123, 144],
]; 

class Coin {
  constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.speed = COIN_SPEED;
      this.width = width;
      this.height = height;
      this.color = "yellow";
      this.image = new Image();
      this.image.src = "./src/img/coinssss.png";

      // Array to store Sprite objects for each frame
      this.sprites = imgArr.map(coords => new Sprite(this.image, ...coords));
      this.currentSpriteIndex = 0;

      // Variables for smooth animation
      this.lastFrameTime = Date.now();
      this.animationInterval = 100; // Adjust the interval for smoother animation
  }

  draw(ctx) {
      const currentSprite = this.sprites[this.currentSpriteIndex];
      ctx.drawImage(
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

  // Increment the sprite index for animation
  update() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - this.lastFrameTime;

    // Update animation frame if enough time has passed
    if (elapsedTime >= this.animationInterval) {
        this.currentSpriteIndex = (this.currentSpriteIndex + 1) % this.sprites.length;
        this.lastFrameTime = currentTime;
  }
  }
}
