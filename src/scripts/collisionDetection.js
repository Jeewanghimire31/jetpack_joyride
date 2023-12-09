
// function checkCollision(character, obstacles) {
//     obstacles.forEach((obstacle) => {
//         if (isCollision(character, obstacle)) {
//             console.log('Collision detected!');
//             // Handle collision logic here if needed
//             setGameOver();
//         }
//     });
// }

function isCollision(character, obstacle) {
    return (
        // check the position of character and obstacles to detect
        character.x + character.width > obstacle.x &&
        character.x < obstacle.x + obstacle.width &&
        character.y + character.height > obstacle.y &&
        character.y < obstacle.y + obstacle.height 
        
    );
}



function checkCollision(character, obstacles, coins) {
    obstacles.forEach((obstacle) => {
      if (isCollision(character, obstacle)) {
        console.log('Collision with obstacle detected!');
        // Handle collision logic with obstacles here if needed
        setGameOver();
      }
    });
  
    coins.forEach((coin, index) => {
      if (isCollision(character, coin)) {
        console.log('Collision with coin detected!');
        // Handle collision logic with coins here

        // coin sound logic
       let coinAudio = new Audio("https://www.superluigibros.com/downloads/sounds/SNES/SMK/wav/coin.wav");
       coinAudio.play();
        // Remove the collected coin
        coins.splice(index, 1);
      }
    });
  }
  