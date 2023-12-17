class Power {
  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   */
  constructor(width, height, type) {
    this.width = width;
    this.height = height;
    this.powerImg = new Image();
    this.x = canvas.width - getRandomNum(0, Math.abs(canvas.width) / 2);
    this.y = getRandomNum(0, canvas.height);
    this.getImageSource(type);
  }

  getImageSource(type) {
    switch (type) {
      case "speed": {
        this.powerImg.src = "./src/img/powerupSpeed.png";
        break;
      }
      case "moreCoin": {
        this.powerImg.src = "./src/img/powerupCoin.png";
        break;
      }
      case "invisibility": {
        this.powerImg.src = "./src/img/powerupInvisible.png";
        break;
      }
    }
  }

  /**
   * Draw power on screen
   *
   * @param {*} ctx
   */
  draw(ctx) {
    this.x -= COIN_SPEED;
    if (this.x < -10000) {
      this.x = canvas.width - getRandomNum(0, Math.abs(canvas.width) / 2);
      this.y = getRandomNum(0, canvas.height);
    }
    ctx.drawImage(this.powerImg, this.x, this.y, this.width, this.height);
  }
}
