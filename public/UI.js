class UI {




  constructor() {

    document.body.style.backgroundImage = "url('Stage Screens/TitleCard.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    this.levelNum = 1;
    this.currentLevel = new Level(levelNum);

    setTimeout(() => {
      this.initializeAnimation();
    }, 1500);

    this.gameStillPlaying = true;
    this.finished = false;
    this.collided = false;
    while (this.gameStillPlaying)
    {
      if (checkGameState()==1)
      {
        this.collided = true;
        this.currentLevel.handleCollision();
      }
      else if (checkGameState() ==2)
      {
        this.finished = true;
        this.levelNum++;
        this.currentLevel = new Level (levelNum);
      }
    }
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
  constructor(levelNumber)
  {
    this.obstacles = [2000];
    this.levelNumber = levelNumber;
    this.player = new playerHorse ([left, right], "space");
  }

  checkGameState ()
  {
    let playerPos = this.player.position;
    if (this.player.isJumping)
    {
      if (obstacles[playerPos == true)
        {
          return 1;
        }
    }
    if (playerPos == 2000)
    {
      return 2;
    }
    return 0;

  }
}
const ui = new UI ();
