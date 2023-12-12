
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


  // obstacle collision
    obstacles.forEach((obstacle) => {
      if (isCollision(character, obstacle)) {
        const score=new Score()
        console.log('Collision with obstacle detected!');
        score.updateHighScore(distanceTravelled);

        // * this is needed after game over later on 
        // score.updateHighScore(coinsCollected);

        // Handle collision logic with obstacles here if needed
        collisionCount +=1;
        if(collisionCount == 1){
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
  