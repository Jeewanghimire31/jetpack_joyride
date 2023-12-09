
class Background {
    
    constructor(canvas, ctx) {
        
        this.canvas = canvas;
        this.ctx = ctx;
        this.speed = 1;
        this.position = 0;
        this.bgImage = new Image();
        this.bgImage.src = "background.png";
    }

    update() {
        if(gameOver) return;
        this.position -= this.speed;
        
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


