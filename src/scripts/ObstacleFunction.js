class ObstacleManager {
    constructor(count, width, height, canvasWidth, canvasHeight, interval) {
        this.obstacles = generateRandomObstacles(count, width, height, canvasWidth, canvasHeight);
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.speed = OBSTACLE_SPEED;
        this.count = count;
        this.width = width;
        this.height = height;

        // coins property
    this.coins = [];
    this.coinInterval = interval;
    this.lastCoinTime = Date.now();
    this.coinGroupX = canvasWidth; // Initial X position for the coin group
    this.coinGroupY = getRandomNum(0, canvasHeight - 150);

        // alien property
        this.aliens = [];
        
    }




    draw(ctx) {
        
        // draw obstacles
    this.obstacles.forEach((pair) => {
        const obstacle1 = pair.obstacle;
        const obstacle2 = pair.obstacle2;

        // Draw the obstacles
        obstacle1.draw(ctx);
        obstacle2.draw(ctx);

        // Draw a line between the obstacles
        ctx.beginPath();
        ctx.moveTo(obstacle1.x + obstacle1.width / 2, obstacle1.y + obstacle1.height / 2);
        ctx.lineTo(obstacle2.x + obstacle2.width / 2, obstacle2.y + obstacle2.height / 2);
        ctx.strokeStyle = "#000000"; // Set line color
        ctx.stroke();
    });
}


    // checking that random generated obstacles are near to each other or not
    isTooCloseToOtherObstacles(obstacle) {
        for (const otherObstacle of this.obstacles) {
            if (obstacle !== otherObstacle) {
                const distance = Math.abs(obstacle.x - otherObstacle.x) +
                                 Math.abs(obstacle.y - otherObstacle.y);

                //Distance between two obstacles
                if (distance < 100) {
                    return true;
                }
            }
        }

        return false;
    }

    
    update() {
        if (gameOver) return;
        this.obstacles.forEach((obstaclePair) => {
            const obstacle1 = obstaclePair.obstacle;
            const obstacle2 = obstaclePair.obstacle2;
    
            obstacle1.x -= this.speed;
            obstacle2.x -= this.speed;
    
            // Check if the obstacle1 is completely off-screen to the left, reset its position
            // if (obstacle1.x + obstacle1.width < 0) {
            //     obstacle1.x = this.canvasWidth; // Reset to the right side of the canvas
            //     obstacle1.y = getRandomNum(0, this.canvasHeight - obstacle1.height); // Reset to a random y-coordinate
            // }
    
            // // Check if the obstacle2 is completely off-screen to the left, reset its position
            // if (obstacle2.x + obstacle2.width < 0) {
            //     obstacle2.x = this.canvasWidth; // Reset to the right side of the canvas
            //     obstacle2.y = getRandomNum(0, this.canvasHeight - obstacle2.height); // Reset to a random y-coordinate
            // }

            if (obstacle1.x + obstacle1.width < 0 && obstacle2.x + obstacle2.width < 0) {
                this.obstacles = generateRandomObstacles(this.count, this.width, this.height, this.canvasWidth, this.canvasHeight);
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
        // coin update finish

        // alien update start
        this.aliens.forEach((alien) => {
            alien.x -= alien.speed;
        });
        // alien property finish
        
    }

    // coin property
    generateCoins() {
        const currentTime = Date.now();
        if (currentTime - this.lastCoinTime > this.coinInterval) {
            for (let i = 0; i < this.coinGroupSize; i++) {
                // let coinX = this.coinGroupX + getRandomNum(0, 50);
                // let coinY = this.coinGroupY + getRandomNum(0, 50);

                // if(coinX != this.obstacles.obstacleX && coinY != this.obstacles.obstacleY ){
                    const lastCoin = this.coins[this.coins.length-1];
                    const coinX = lastCoin ? lastCoin.x+30 : this.coinGroupX;
                    const coin = new Coin(
                        coinX, // Adjust the range based on your requirements
                        this.coinGroupY, // Adjust the range based on your requirements
                        20,
                        20 
                    );
                    this.coins.push(coin);
                // }
                }
                
          
            this.lastCoinTime = currentTime;
            this.coinGroupSize = getRandomNum(5, 10);
            this.coinGroupX = canvas.width; // Reset X position for the next coin group
            this.coinGroupY = getRandomNum(0, canvas.height - 150); // Reset Y position for the next coin group
        }
    }

    reset() {
        // this.obstacles = generateRandomObstacles(this.obstacles.length, 30, 30, this.canvasWidth, this.canvasHeight);
        this.obstacles = generateRandomObstacles(this.count, this.width, this.height, this.canvasWidth, this.canvasHeight);
        // Reinitialize coins
        this.coins = [];
        this.lastCoinTime = Date.now();
        this.coinGroupX = this.canvasWidth;
        this.coinGroupY = getRandomNum(0, this.canvasHeight - 150);
    }


    // alien property
    generateAliens() {
        const alien = new Alien(
            this.canvasWidth,
            this.canvasHeight - 30, // Adjust the height 
            20, // Adjust width 
            20, // Adjust height
        );
        this.aliens.push(alien);
    }
}
