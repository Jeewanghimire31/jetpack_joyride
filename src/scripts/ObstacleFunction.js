class ObstacleManager {
    constructor(count, width, height, canvasWidth, canvasHeight, speed) {
        this.obstacles = generateRandomObstacles(count, width, height, canvasWidth, canvasHeight);
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.speed = speed;
    }

    // drawing obstacles which were generated in obstacle.js file
    draw(ctx) {
        this.obstacles.forEach(function (obstacle) {
            while (this.isTooCloseToOtherObstacles(obstacle)) {
                obstacle.x = getRandomNum(0, this.canvasWidth - obstacle.width);
                obstacle.y = getRandomNum(0, this.canvasHeight - obstacle.height);
            }

            obstacle.draw(ctx);
        }, this); 
    }

    // checking that random generated obstacles are near to each other or not
    isTooCloseToOtherObstacles(obstacle) {
        for (const otherObstacle of this.obstacles) {
            if (obstacle !== otherObstacle) {
                const distance = Math.abs(obstacle.x - otherObstacle.x) +
                                 Math.abs(obstacle.y - otherObstacle.y);

                // Adjust the threshold as needed
                if (distance < 100) {
                    return true;
                }
            }
        }

        return false;
    }

    
    update() {
        this.obstacles.forEach((obstacle) => {
            obstacle.x -= this.speed;

            // If the obstacle is completely off-screen to the left, reset its position
            if (obstacle.x + obstacle.width < 0) {
                obstacle.x = this.canvasWidth; // Reset to the right side of the canvas
                obstacle.y = getRandomNum(0, this.canvasHeight - obstacle.height); // Reset to a random y-coordinate
            }
        });
    }

    reset() {
        this.obstacles = generateRandomObstacles(this.obstacles.length, 30, 30, this.canvasWidth, this.canvasHeight);
    }
}
