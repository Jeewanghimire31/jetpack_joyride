class ObstacleManager {
    constructor(count, width, height, canvasWidth, canvasHeight, speed, interval) {
        this.obstacles = generateRandomObstacles(count, width, height, canvasWidth, canvasHeight);
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.speed = speed;

        // Add coins property
    this.coins = [];
    this.coinInterval = interval;
    this.lastCoinTime = Date.now();
    this.coinGroupX = canvasWidth; // Initial X position for the coin group
        this.coinGroupY = getRandomNum(0, canvasHeight - 20);
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

            // Move existing coins to the left
            this.coins.forEach((coin) => {
                coin.x -= this.speed; // Assuming SPEED is a constant for the scrolling speed
            });
    
            // Remove coins that have gone off the left side of the canvas
            this.coins = this.coins.filter((coin) => coin.x + coin.width > 0);
    
            // Generate new coins when there are no coins on the screen
        if (this.coins.length === 0) {
            this.generateCoins();
        }
        
    }

    generateCoins() {
        const currentTime = Date.now();
        if (currentTime - this.lastCoinTime > this.coinInterval) {
            for (let i = 0; i < this.coinGroupSize; i++) {
                const coin = new Coin(
                    this.coinGroupX + getRandomNum(0, 50), // Adjust the range based on your requirements
                    this.coinGroupY + getRandomNum(0, 50), // Adjust the range based on your requirements
                    20,
                    20
                );
                this.coins.push(coin);
            }
          
            this.lastCoinTime = currentTime;
            this.coinGroupSize = getRandomNum(5, 10);
            this.coinGroupX = canvas.width; // Reset X position for the next coin group
            this.coinGroupY = getRandomNum(0, canvas.height - 20); // Reset Y position for the next coin group
        }
    }

    reset() {
        this.obstacles = generateRandomObstacles(this.obstacles.length, 30, 30, this.canvasWidth, this.canvasHeight);
    }
}
