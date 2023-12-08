class Bullet
 
{
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.color = "#000"; // Adjust color as needed
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    // falling bullets down
    update() {
        this.y += this.speed; // Update bullet position based on its speed
      }
}