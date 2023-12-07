

class Obstacle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = "#FF0000";
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function generateRandomObstacles(count, width, height, canvasWidth, canvasHeight) {
    // generate obstacles array
    const obstacles = [];

    for (let i = 0; i < count; i++) {
        const obstacle = new Obstacle(
            // random position
            getRandomNum(0, canvasWidth - width),
            getRandomNum(0, canvasHeight - height),
            width,
            height
        );
        obstacles.push(obstacle);
    }

    return obstacles;
}
