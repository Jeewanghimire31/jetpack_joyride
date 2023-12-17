const alienArr = [
    [450, 8, 51, 60],
    [391, 8, 44, 63],
    [328, 5, 47, 66],
    [264, 8, 45, 63],
    [198, 6, 50, 53],
    [133, 7, 46, 52],
    [64, 8, 55, 61],
    [2, 7, 53, 61],
]
class Alien {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = ALIEN_SPEED;
        this.color = "#00FF00"; // Alien color

        this.alienImage = new Image();
        this.alienImage.src = "./src/img/alien.png";

         // array to store sprite object for each frame
         this.sprites = alienArr.map(coords => new Sprite(this.alienImage, ...coords))
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
        const currentTime = Date.now();
    const elapsedTime = currentTime - this.lastFrameTime;

    // Update animation frame if enough time has passed
    if (elapsedTime >= this.animationInterval) {
        this.currentSpriteIndex = (this.currentSpriteIndex + 1) % this.sprites.length;
        this.lastFrameTime = currentTime;
  }
    }
}
