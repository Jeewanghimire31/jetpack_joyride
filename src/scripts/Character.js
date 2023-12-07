
class Character {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = "#000";
        this.vx = 0;
        this.vy = 0;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect (this.x, this.y, this.width, this.height);
    }
}
