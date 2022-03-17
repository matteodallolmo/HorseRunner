class UI {
  constructor() {
<<<<<<< HEAD
    this.backgroundImage = "url('Stage Screens/TitleCard.png')";
    var canvas = document.getElementById("game");
    canvas.style.backgroundImage = this.backgroundImage;
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";
=======
    let canvas = document.getElementById("game");
    let ctx = canvas.getContext('2d');
    this.backgroundImage = new Image(canvas.width,canvas.height);
    this.backgroundImage.src = 'StageScreens/TitleCard.svg';
    ctx.drawImage(this.backgroundImage,0,0,canvas.width, canvas.height)
>>>>>>> upstream/main

    this.levelNum = 1;
    this.currentLevel = new Level(this.levelNum);

    setTimeout(() => {
      this.initializeAnimation();
    }, 1500);

    this.gameStillPlaying = true;
    this.finished = false;
    this.collided = false;

    while (this.gameStillPlaying) {
      this.gameStillPlaying = false;
      if (this.currentLevel.checkGameState() == 1) {
        this.collided = true;
        this.currentLevel.handleCollision();
      } else if (this.currentLevel.checkGameState() == 2) {
        this.finished = true;
        if (this.currentLevel.wonOrLost() == 1) {
          this.levelNum++;
          this.currentLevel = new Level(levelNum);
          this.currentLevel.win();
        } else {
          this.gameStillPlaying = false;
          this.currentLevel.lose();
          this();
        }
      }
    }
  }

<<<<<<< HEAD
  draw() {
    var ctx = document.getElementById("game").getContext("2d");

    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, 1000, 1900); // clear canvas

    // Figure out what pen we wanna draw with
    ctx.fillStyle = "rgba(0, 153, 255, 1)";
    ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";

    ctx.save();
    ctx.lineWidth = 6;
    // this.currentLevel.display(ctx);
    ctx.restore();
=======
introScreen()
{


}


  draw() {

    this.ctx.globalCompositeOperation = 'source-over';
    this.ctx.clearRect(0, 0, 1000, 1900); // clear canvas

    // Figure out what pen we wanna draw with
    this.ctx.fillStyle = 'rgba(0, 153, 255, 1)';
    this.ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';

    this.ctx.save();
    this.ctx.lineWidth = 6;
    //this.currentLevel.display(ctx);
    this.ctx.restore();
>>>>>>> upstream/main

    window.requestAnimationFrame(this.draw.bind(this));
  }

  initializeAnimation() {
    window.requestAnimationFrame(this.draw.bind(this));
  }
}

<<<<<<< HEAD
const ui = new UI();
=======
  //const ui = new UI();
>>>>>>> upstream/main
