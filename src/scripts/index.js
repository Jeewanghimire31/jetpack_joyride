let canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');

let x = 0;
let y = 0;

const player = new Character(x, y, 50, 50);



const animate = ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // update player position
    player.x += vx;
    player.y += vy;

    // Check boundaries to prevent going outside the canvas
    if (player.x < 0) player.x = 0;
    if (player.y < 0) player.y = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;

    // Draw the player
    player.draw(ctx);

    requestAnimationFrame(animate);
}

animate();