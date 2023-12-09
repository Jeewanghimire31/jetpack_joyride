class Coin {
    constructor(x, y, width, height, speed) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.width = width;
      this.height = height;
      this.color = "yellow";
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
  