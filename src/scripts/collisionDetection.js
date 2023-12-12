
let collisionCount = 0;

function isCollision(character, obstacle) {
    return (
        // check the position of character and obstacles to detect
        character.x + character.width >= obstacle.x &&
        character.x <= obstacle.x + obstacle.width &&
        character.y + character.height >= obstacle.y &&
        character.y <= obstacle.y + obstacle.height 
        
    );
}


function checkCollision(character, obstacles, coins, aliens, missile) {
  if(isCollision(character, missile)){
    console.log("ma yeha xu");
    collisionCount +=1;
        if(collisionCount == 1){
          setGameOver();
        }
  }


  // obstacle pair collision
  obstacles.forEach((pair) => {
    const obstacle1 = pair.obstacle;
    const obstacle2 = pair.obstacle2;

    // Check if the character is within the range of one obstacle to another
    if (
        character.x + character.width >= obstacle1.x &&
        character.x <= obstacle2.x + obstacle2.width &&
        character.y + character.height >= Math.min(obstacle1.y, obstacle2.y) &&
        character.y <= Math.max(obstacle1.y + obstacle1.height, obstacle2.y + obstacle2.height)
    ) {
        const score = new Score();
        console.log('Collision with obstacle pair detected!');
        score.updateHighScore(distanceTravelled);

        // Handle collision logic with obstacle pairs here if needed
        collisionCount += 1;
        if (collisionCount == 1) {
            setGameOver();
        }
    }
});

  
    // coins collision
    coins.forEach((coin, index) => {
      if (isCollision(character, coin)) {
        console.log('Collision with coin detected!');
        // Handle collision logic with coins here

        increaseCoins();

        // coin sound logic
       let coinAudio = new Audio("https://www.superluigibros.com/downloads/sounds/SNES/SMK/wav/coin.wav");
       coinAudio.play();
        // Remove the collected coin
        coins.splice(index, 1);
      }
    });


// Bullet-Alien Collision remains unchanged
player.bullets.forEach((bullet, bulletIndex) => {
  aliens.forEach((alien, alienIndex) => {
      if (isCollision(bullet, alien)) {
          console.log('Bullet hit alien!');
          // Handle bullet hit alien logic here

          // Remove the collided bullet and alien
          player.bullets.splice(bulletIndex, 1);
          aliens.splice(alienIndex, 1);
      }
  });
});

  }
  