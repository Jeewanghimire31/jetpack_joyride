const IMAGES_BASED_ON_STATES = {
  walking: [
    // "./src/img/character/walk/walk1.png",
    "./src/img/character/walk/walk2.png",
    "./src/img/character/walk/walk3.png",
    "./src/img/character/walk/walk4.png",
    "./src/img/character/walk/walk5.png",
    "./src/img/character/walk/walk6.png",
    "./src/img/character/walk/walk7.png",
  ],
  flying: [
    "./src/img/character/fly/fly1.png",
    "./src/img/character/fly/fly2.png",
    "./src/img/character/fly/fly3.png",
    "./src/img/character/fly/fly4.png",
    "./src/img/character/fly/fly5.png",
  ],
  idle: [
    "./src/img/character/idle/idle1.png",
    "./src/img/character/idle/idle2.png",
    "./src/img/character/idle/idle3.png",
    "./src/img/character/idle/idle4.png",
    "./src/img/character/idle/idle5.png",
    "./src/img/character/idle/idle6.png",
  ],
  dying: [
    "./src/img/character/dead/dead1.png",
    "./src/img/character/dead/dead2.png",
    "./src/img/character/dead/dead3.png",
    "./src/img/character/dead/dead4.png",
    "./src/img/character/dead/dead5.png",
    "./src/img/character/dead/dead6.png",
    "./src/img/character/dead/dead7.png",
    "./src/img/character/dead/dead8.png",
  ],

};

let index = 0;

class Character {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = "#000";
    this.vx = 0;
    this.vy = 0;
    this.bullets = [];
    this.isGrounded = false;
    this.state = "walking";
  }

  draw(ctx) {
    this.drawImageBasedOnState(ctx);
    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    this.y += this.vy;
    this.applyGravity();
    this.drawBullets();
  }

  drawImageBasedOnState(ctx) {
    // const image = new Image();
    // switch (this.state) {
    //     case "walking":
    //     const walkSrc = IMAGES_BASED_ON_STATES[this.state][0];
    //     image.src = walkSrc;
    //     break;
    //     case "flying":
    //         const flySrc = IMAGES_BASED_ON_STATES.flying[0];
    //         image.src = flySrc;
    //         break;
    //     case "idle":
    //         const idleSrc = IMAGES_BASED_ON_STATES.idle[0];
    //         image.src = idleSrc;
    //         break;
    //     case "dying":
    //         const deadSrc = IMAGES_BASED_ON_STATES.dead[0];
    //         image.src = deadSrc;
    //         break;
    // }

    // ctx.drawImage(image, this.x, this.y, this.width, this.height);

    const image = new Image();

    // Get the array of images based on the current state
    const imageArray = IMAGES_BASED_ON_STATES[this.state];

    // Ensure there are images in the array
    if (imageArray && imageArray.length > 0) {
      // Get the current index for the animation
      const currentIndex = Math.floor(index) % imageArray.length;

      // Set the image source based on the current index
      image.src = imageArray[currentIndex];

      // Increment the index for the next frame
      index += 0.2; // Adjust the speed of animation as needed
    }

    // Draw the image
    ctx.drawImage(image, this.x, this.y, this.width, this.height);
  
  }

  // gravity applied to player
  applyGravity() {
    if (!this.isGrounded) {
      this.vy += GRAVITY;
    }
  }

  // push bullet in bullets array and shoot
  shoot(angle) {
    const bulletSpeed = 5; // Adjust the speed as needed
    const angleInRadians = (angle * Math.PI) / 180; // Shoot bullets at a 30-degree angle

    // Calculate the initial velocity components based on the angle
    const vx = bulletSpeed * Math.cos(angleInRadians);
    const vy = -bulletSpeed * Math.sin(angleInRadians);

    const bullet = new Bullet(
      this.x + this.width - 5,
      this.y + this.height,
      5,
      5,
      5,
      vx,
      vy
    );
    const bullet2 = new Bullet(this.x, this.y + this.height, 5, 5, 5, -vx, vy);
    this.bullets.push(bullet, bullet2, bullet, bullet2);

    // bullet fire sound
    let bulletAudio = new Audio(
      "https://rpg.hamsterrepublic.com/wiki-images/2/21/Collision8-Bit.ogg"
    );
    bulletAudio.play();
  }

  // drawing bullets
  drawBullets() {
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      this.bullets[i].update();
      this.bullets[i].draw(ctx);

      // Check if bullet goes off-screen and remove it
      if (this.bullets[i].y > canvas.height) {
        this.bullets.splice(i, 1);
      }
    }
  }
}
