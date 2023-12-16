class Power {
  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   */
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.powerImg = new Image();
    this.powerImg.src = "./src/img/powerup_box.png";
    this.x = canvas.width - getRandomNum(0, Math.abs(canvas.width) / 2);
    this.y = getRandomNum(0, canvas.height);
  }

  /**
   * Draw power on screen
   *
   * @param {*} ctx
   */
  draw(ctx) {
    this.x -= COIN_SPEED;
    if (this.x < -400) {
      this.x = canvas.width - getRandomNum(0, Math.abs(canvas.width) / 2);
      this.y = getRandomNum(0, canvas.height);
    }
    ctx.drawImage(this.powerImg, this.x, this.y, this.width, this.height);
  }
}
