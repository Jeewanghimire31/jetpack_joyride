
class Character {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = "#000";
        this.vx = 0;
        this.vy = 0;
        this.bullets = [];
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect (this.x, this.y, this.width, this.height);
        this.y += this.vy;
        this.applyGravity();
        this.drawBullets();
    }
    // gravity applied to player
    applyGravity() {
        this.vy += GRAVITY;
    }


    // push bullet in bullets array and shoot
    shoot() {
        const bullet = new Bullet(this.x + this.width-5, this.y + this.height, 5, 5, 5);
        const bullet2 = new Bullet(this.x, this.y + this.height, 5, 5, 5);
        this.bullets.push(bullet, bullet2, bullet, bullet2);
        console.log("yes i am hitting")
    }

    // drawing bullets
    drawBullets() {
        for (let i = this.bullets.length - 1; i >= 0; i--) {
            this.bullets[i].update();
            this.bullets[i].draw(ctx);

        
            // Check if bullet goes off-screen and remove it
            if (this.bullets[i].y > canvas.height) {
                this.bullets.splice(i, 1);
            }
          }
    }
}
