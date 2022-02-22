class UI {




  constructor() {

    document.body.style.backgroundImage = "url('Stage Screens/TitleCard.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    this.currentLevel = 0;
    this.levelOne = new Level(1);
    this.levelTwo = new Level(2);
    this.levelThree = new Level(3);
    this.levelFour = new Level(4);
    this.levelFive = new Level(5);
    this.currentLevel = this.levelOne;

    setTimeout(() => {
      this.initializeAnimation();
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
    this.currentLevel.display(ctx);
    ctx.restore();

    window.requestAnimationFrame(this.draw);
  }

  initializeAnimation() {
    window.requestAnimationFrame(this.draw);
  }


}
class Level
{
  //Global integer refreshTime;
  //let obstacles[];
  //let horsePerLanes[];
  //let backgroundTexture = "url('Track Background.png');
  //let levelNumber;

  constructor(levelNumber)
  {
    this.levelNumber = levelNumber;

  }
}
const ui = new UI ();
