
class UI{
  constructor() {

    this.backgroundImage = "url('Stage Screens/TitleCard.png')";
    var canvas = document.getElementById("game");
    canvas.style.backgroundImage= this.backgroundImage;
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";

    this.levelNum = 1;
    this.currentLevel = new Level(this.levelNum);
    this.currentLevel.playGame();

    setTimeout(() => {
      this.initializeAnimation();
    }, 1500);
  }


  draw() {
    var ctx = document.getElementById('game').getContext('2d');

    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, 1000, 1900); // clear canvas

    // Figure out what pen we wanna draw with
    ctx.fillStyle = 'rgba(0, 153, 255, 1)';
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';

    ctx.save();
    ctx.lineWidth = 6;
    //this.currentLevel.display(ctx);
    ctx.restore();

    window.requestAnimationFrame(this.draw());
  }

  initializeAnimation() {
    window.requestAnimationFrame(this.draw());
  }

  handleLoss()
  {
    this.backgroundImage = "url('Stage Screens/GameOver.png')";
    var canvas = document.getElementById("game");
    canvas.style.backgroundImage= this.backgroundImage;
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";

    setTimeout(() => {
      this();
    }, 1500);
  }

  handleWin()
  {
    this.backgroundImage = "url('Stage Screens/GameOver.png')";
    var canvas = document.getElementById("game");
    canvas.style.backgroundImage= this.backgroundImage;
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";

  }


}

  const ui = new UI();
