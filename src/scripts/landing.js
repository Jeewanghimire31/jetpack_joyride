// Your game initialization logic
document.getElementById('startGameButton').addEventListener('click', () => {
    // Hide the landing page
    document.getElementById('landingPage').style.display = 'none';

    // Show the game container
    document.getElementById('gameContainer').style.display = 'block';

    // Trigger the game start (you can put your game initialization logic here)
    startGame();
});


let mySound = new Audio('https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3');


function startGame() {
  
    // Play the audio
    mySound.play();
    mySound.loop = true;

    // Start the animation loop
    animate();
}

