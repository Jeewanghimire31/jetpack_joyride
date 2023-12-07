
function checkCollision(character, obstacles) {
    obstacles.forEach((obstacle) => {
        if (isCollision(character, obstacle)) {
            console.log('Collision detected!');
            // Handle collision logic here if needed
            setGameOver();
        }
    });
}

function isCollision(character, obstacle) {
    return (
        // check the position of character and obstacles to detect
        character.x + character.width > obstacle.x &&
        character.x < obstacle.x + obstacle.width &&
        character.y + character.height > obstacle.y &&
        character.y < obstacle.y + obstacle.height 
        
    );
}

