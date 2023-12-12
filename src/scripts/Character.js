
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
    shoot(angle) {

        const bulletSpeed = 5; // Adjust the speed as needed
        const angleInRadians = (angle * Math.PI) / 180; // Shoot bullets at a 30-degree angle
    
        // Calculate the initial velocity components based on the angle
        const vx = bulletSpeed * Math.cos(angleInRadians);
        const vy = -bulletSpeed * Math.sin(angleInRadians);

        const bullet = new Bullet(this.x + this.width-5, this.y + this.height, 5, 5, 5, vx, vy);
        const bullet2 = new Bullet(this.x, this.y + this.height, 5, 5, 5, -vx, vy);
        this.bullets.push(bullet, bullet2, bullet, bullet2);
        

        // bullet fire sound
        let bulletAudio = new Audio("https://rpg.hamsterrepublic.com/wiki-images/2/21/Collision8-Bit.ogg");
        bulletAudio.play();
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
