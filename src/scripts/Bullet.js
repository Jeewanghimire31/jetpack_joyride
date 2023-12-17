const bulletArr = [
    [97, 8, 33, 154],
    [98, 173, 31, 147],
    [98, 336, 29, 153],
  ];

class Bullet{
    constructor(x, y, width, height, speed, vx, vy) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.vx = vx; // Initial velocity in the x-direction
        this.vy = vy; // Initial velocity in the y-direction
        this.color = "white"; // Adjust color as needed

        this.bulletImage = new Image();
        this.bulletImage.src = "./src/img/bullet.png";

        // array to store sprite object for each frame
        this.sprites = bulletArr.map(coords => new Sprite(this.bulletImage, ...coords))
        this.currentSpriteIndex = 0;

        this.lastFrameTime = Date.now();
        this.animationInterval = 100;
    }

    draw(ctx) {
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.x, this.y, this.width, this.height);

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

  
    // Update the bullet's position based on velocity
    update() {
        this.x += this.vx;
        this.y += this.vy;

        const currentTime = Date.now();
    const elapsedTime = currentTime - this.lastFrameTime;

    // Update animation frame if enough time has passed
    if (elapsedTime >= this.animationInterval) {
        this.currentSpriteIndex = (this.currentSpriteIndex + 1) % this.sprites.length;
        this.lastFrameTime = currentTime;
  }
    }
}