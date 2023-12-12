class Missile {
    constructor(canvas, ctx) {
      this.canvas = canvas;
      this.ctx = ctx;
      this.alertDiv = document.getElementById('alert');
      this.missileSpeed = MISSILE_SPEED;
      this.missileInterval = MISSILE_INTERVAL;
      this.alertTime = ALERT_TIME;
      this.missileTimer = null;
      this.alertTimer = null;
      this.color = "green";
      this.x = 0;
      this.y = 0;
      this.width = 50;
      this.height = 10;
      this.startMissile();
    }
  
    startMissile() {
      this.x = this.canvas.width;
      this.y = Math.random() * this.canvas.height;
      clearInterval(this.alertTimer);
      this.alertTimer = setTimeout(() => {
        if(!gameOver){

            this.showAlert();
        }
        setTimeout(() => {
          this.missileTimer = setInterval(() => {
            this.moveMissile();
          }, 1000 / 60);
        }, this.alertTime);
      }, this.missileInterval - this.alertTime);
    }
  
    drawMissile() {
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  
    moveMissile() {
      this.x -= this.missileSpeed;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawMissile();
  
      if (this.x + 20 < 0) {
        clearInterval(this.missileTimer);
        this.startMissile();
      }

    //   if(this.x < this.canvas.width){
    //     const missileAudio = new Audio("https://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/explosion.ogg");
    //   missileAudio.play();
    //   }else{
    //     missileAudio.pause();
    //   }
    }
  

    showAlert() {
        this.alertDiv.style.display = 'block';
        this.alertDiv.style.top = `${this.y}px`;
        this.alertDiv.style.right = `${this.canvas.width - this.x}px`;

//  missile lunch sound
 const missileAlertAudio = new Audio("https://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg");
 missileAlertAudio.play();
        const hideAlert = () => {
          this.alertDiv.style.display = 'none';
          cancelAnimationFrame(this.alertAnimation);
        };
      
        const animateAlert = () => {
          this.alertAnimation = requestAnimationFrame(animateAlert);
          if (this.x + this.width < this.canvas.width - 1) { // Adjusted condition to hide 1 second before reaching canvas
            hideAlert();
          }
        };
      
        setTimeout(() => {
           
          animateAlert();
        }, this.alertTime);
      }
      
  }
  