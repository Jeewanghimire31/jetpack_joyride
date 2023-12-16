// class Power {
//   /**
//    *
//    * @param {number} x
//    * @param {number} y
//    * @param {number} width
//    * @param {number} height
//    */
//   constructor(x, y, width, height) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.color = "rgba(255, 0,0, 0.2)";
//     this.powerImg = new Image();
//     this.powerImg.src = "./src/img/powerup_box.png";
//     this.vy = 0.2;
//   }
//   /**
//    * draw power on screen
//    *
//    * @param {*} ctx
//    */
//   draw(ctx) {
//     this.ctx = ctx;
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//     ctx.drawImage(this.powerImg, this.x, this.y, this.width, this.height);
//   }
//   remove() {
//     ctx.clearRect(this.x, this.y, this.width, this.height);
//   }
//   update(ctx) {
//     this.x -= COIN_SPEED;
//     ctx.drawImage(this.powerImg, this.x, this.y, this.width, this.height);
//   }
// }

class Power {
  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   */
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = "rgba(255, 0, 0, 0.2)";
    this.powerImg = new Image();
    this.powerImg.src = "./src/img/powerup_box.png";
    this.vy = 0.2;
    this.isActive = false; // Added to track the activation state
  }

  /**
   * Draw power on screen
   *
   * @param {*} ctx
   */
  draw(ctx) {
    ctx.fillStyle = this.color;
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(this.powerImg, this.x, this.y, this.width, this.height);
  }

  /**
   * Remove power from the screen
   *
   * @param {*} ctx
   */
  remove(ctx) {
    ctx.clearRect(this.x, this.y, this.width, this.height);
  }

  /**
   * Update power's position and handle activation
   *
   * @param {*} ctx
   */
  update(ctx) {
    if (!this.isActive) {
      // If the power is not active, activate it after a 2-second delay
      setTimeout(() => {
        this.activatePower();
      }, 2000);
    }

    this.x -= COIN_SPEED;
    ctx.drawImage(this.powerImg, this.x, this.y, this.width, this.height);
    // ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  /**
   * Activate the power
   */
  activatePower() {
    if (!this.isActive) {
      console.log("Power activated!");
      this.isActive = true;
    }
  }
}
