class Bullet
 
{
    constructor(x, y, width, height, speed, vx, vy) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.vx = vx; // Initial velocity in the x-direction
        this.vy = vy; // Initial velocity in the y-direction
        this.color = "white"; // Adjust color as needed
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

  
    // Update the bullet's position based on velocity
    update() {
        this.x += this.vx;
        this.y += this.vy;
    }
}