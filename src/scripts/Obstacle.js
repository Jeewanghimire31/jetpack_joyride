

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
        // obstacles.push(obstacle);
        const obstacle2 = new Obstacle(
            // random position
            obstacle.x + 50,
            obstacle.y + 50,
            width,
            height
        );
        // obstacles.push(obstacle2);
        // Create an object to represent the obstacle pair
        const obstaclePair = { obstacle, obstacle2 };
        obstacles.push(obstaclePair);
        console.log(obstacles);
    }

    return obstacles;
}
