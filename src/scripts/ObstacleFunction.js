

class ObstacleManager {
    constructor(count, width, height, canvasWidth, canvasHeight) {
        this.obstacles = generateRandomObstacles(count, width, height, canvasWidth, canvasHeight);
    }

    draw(ctx) {
        this.obstacles.forEach(function(obstacle) {
            obstacle.draw(ctx);
          });
    }

    reset() {
        this.obstacles = generateRandomObstacles(this.obstacles.length, 30, 30, canvas.width, canvas.height);
    }
}



