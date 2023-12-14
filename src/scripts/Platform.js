
class Platform {
    constructor(canvas, ctx, increaseDistance ){
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = this.canvas.width * 2;
        this.height = 100 - 20;
        this.x = 0;
        this.y = this.canvas.height-this.height;
        this.color = "rgba(255, 0,0, 0.2)";
        this.platformImage = new Image();
        this.platformImage.src = "backgroundfloor.png";
        this.increaseDistance = increaseDistance;

        
    }

    draw = () => {
        // this.ctx.fillStyle = this.color;
        // this.ctx.fillRect(0, 0, this.canvas.width, 200);
        this.ctx.drawImage(this.platformImage, this.x, this.y - 20, this.width / 2, this.height + 20);

        // this.ctx.fillStyle = "#aaa";
        // this.ctx.fillRect(this.x + this.canvas.width, 0, this.canvas.width, 200)
        this.ctx.drawImage(this.platformImage, this.x + this.canvas.width,this.y -20 , this.width /2 , this.height + 20)

        // this.ctx.fillStyle = this.color;
        // this.ctx.fillRect(this.x, this.y, this.width, this.height);

    }

    update(){
        if(gameOver) return;
        this.x -= 5;


        if(this.x <= -this.canvas.width){
            this.x = 0;
        }
    }
}



