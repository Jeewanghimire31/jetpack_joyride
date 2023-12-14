
class Background {
    
    constructor(canvas, ctx, increaseDistance) {
        
        this.canvas = canvas;
        this.ctx = ctx;
        this.speed = 5;
        this.x = 0;
        this.y = this.canvas.height-100;
        this.bgImage = new Image();
        this.bgImage.src = "background.png";
        this.increaseDistance = increaseDistance;
    }

    update() {
        if(gameOver) return;
        this.x -= this.speed;

         // Call the increaseDistance function
         this.increaseDistance(1);
        
        // If the first image is completely off-screen to the left, reset its x
        if (this.x <= -this.canvas.width) {
            this.x = 0;
        }
    }

    draw() {
        // Draw the image with the x-coordinate based on the x
        this.ctx.drawImage(this.bgImage, this.x, 0, this.canvas.width, this.y);

        // Draw a second copy of the image to cover the space when the first image moves off-screen
        this.ctx.drawImage(this.bgImage, this.x + this.canvas.width, 0, this.canvas.width, this.y);
    }
}


