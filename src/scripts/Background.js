
class Background {
    
    constructor(canvas, ctx, increaseDistance) {
        
        this.canvas = canvas;
        this.ctx = ctx;
        this.speed = 5;
        this.position = 0;
        this.bgImage = new Image();
        this.bgImage.src = "background.png";
        this.increaseDistance = increaseDistance;
    }

    update() {
        if(gameOver) return;
        this.position -= this.speed;

         // Call the increaseDistance function
         this.increaseDistance(1);
        
        // If the first image is completely off-screen to the left, reset its position
        if (this.position <= -this.canvas.width) {
            this.position = 0;
        }
    }

    draw() {
        // Draw the image with the x-coordinate based on the position
        this.ctx.drawImage(this.bgImage, this.position, 0);

        // Draw a second copy of the image to cover the space when the first image moves off-screen
        this.ctx.drawImage(this.bgImage, this.position + this.canvas.width, 0);
    }
}


