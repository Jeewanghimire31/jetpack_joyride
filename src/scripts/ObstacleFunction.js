

// class ObstacleManager {
//     constructor(count, width, height, canvasWidth, canvasHeight) {
//         this.obstacles = generateRandomObstacles(count, width, height, canvasWidth, canvasHeight);

//         this.speed = SPEED;
//     }

//     draw(ctx) {
//         this.obstacles.forEach(function(obstacle) {
//             obstacle.draw(ctx);
//           });
//     }

//     update() {
//         this.obstacles.forEach((obstacle) => {
//             obstacle.x -= this.speed;

//             // If the obstacle is completely off-screen to the left, reset its position
//             if (obstacle.x + obstacle.width < 0) {
//                 obstacle.x = this.canvasWidth; // Reset to the right side of the canvas
//                 obstacle.y = getRandomNum(0, this.canvasHeight - obstacle.height); // Reset to a random y-coordinate
//             }
//         });
//     }

//     reset() {
//         this.obstacles = generateRandomObstacles(this.obstacles.length, 30, 30, canvas.width, canvas.height);
//     }
// }





class ObstacleManager {
    constructor(count, width, height, canvasWidth, canvasHeight, speed) {
        this.obstacles = generateRandomObstacles(count, width, height, canvasWidth, canvasHeight);
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.speed = speed;
    }

    draw(ctx) {
        this.obstacles.forEach(function (obstacle) {
            obstacle.draw(ctx);
        });
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
