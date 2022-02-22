class UI {
  constructor() {
    this.currentLevel = 0;
    this.levelOne = new Level(1);
    this.levelTwo = new Level(2);
    this.levelThree = new Level(3);
    this.levelFour = new Level(4);
    this.levelFive = new Level(5);
    currentLevel = levelOne;

    document.body.style.backgroundImage = "url('TitleCard.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    setTimeout(() => {
      initializeAnimation();
    }, 1500);
  }


  draw() {
    var ctx = document.getElementById('game').getContext('2d');

    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, 500, 1000); // clear canvas

    // Figure out what pen we wanna draw with
    ctx.fillStyle = 'rgba(0, 153, 255, 1)';
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';

    ctx.save();
    ctx.lineWidth = 6;
    ctx.translate(500, 1000);
    currentLevel.runGame(ctx);
    ctx.restore();

    window.requestAnimationFrame(draw);
  }

  initializeAnimation() {
    window.requestAnimationFrame(draw);
  }


}
