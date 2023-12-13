

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
        let distanceX = getRandomNum(OBSTACLE_MIN_DISTANCE, OBSTACLE_MAX_DISTANCE);
        let distanceY = getRandomNum(-OBSTACLE_MAX_DISTANCE, OBSTACLE_MAX_DISTANCE);
        let obstacleX = canvasWidth;
        let obstacleY = distanceY < 0 ? getRandomNum(-distanceY, canvasHeight - height) :getRandomNum(0, canvasHeight-2*height-distanceY)

        // obstacle1 created
        const obstacle = new Obstacle(
            // random position
            obstacleX,
            obstacleY,
            width,
            height
        );
        // obstacles.push(obstacle);
        const obstacle2 = new Obstacle(
            //position in near to obstacle1
            obstacle.x + distanceX,
            obstacle.y + distanceY,
            width,
            height
        );
        // obstacles.push(obstacle2);
        // Create an object to represent the obstacle pair
        const obstaclePair = { obstacle, obstacle2 };
        obstacles.push(obstaclePair);
    }

    return obstacles;
}
