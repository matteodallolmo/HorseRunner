


class Level {
  constructor(levelNumber) {
    this.levelNum = levelNumber;
    this.refreshTime = 60; //fps
    this.obstaclesArray = [];
    this.horseArray = [];
    this.obstacleIndexes = [];
    this.backgroundImage = new Image();// Create new img element
    this.backgroundImage.src = 'CompleteTrack.png'; // Set source path
    this.timer = null;
    this.obstacles = [];
    this.obstacles.length = 20000;
    this.levelNumber = levelNumber;
    this.player = new PlayerHorse(1,1);//temp parameters
  }

  getRandomInt(min, max)
  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  populateObstaclesArray ()
  {
    if (this.levelNum == 1)
    {
      generateIndexesForObstaclesToBePlaced (4);
    }
    else if (this.levelNum == 2)
    {
      generateIndexesForObstaclesToBePlaced (6);
    }
    else if (this.levelNum == 3)
    {
      generateIndexesForObstaclesToBePlaced (8);
    }
    else {
      generateIndexesForObstaclesToBePlaced(12);
    }
    let obstaclesPutIn = 0;
    for (int k = 0; k < 20000; k++)
    {
      if (k == obstacleIndexes[obstaclesPutIn])
      {
        obstaclesArray [k] = true;
        obstaclesPutIn++;
      }
    }
    obstacleIndexes = [];
  }

  generateIndexesForObstaclesToBePlaced (numObstacles)
  {
    for (int k = 0; k < numObstacles; k++)
    {
      let num = this.getRandomInt(0,20000);
      while (k != 0 && this.obstacleIndexes[k].includes(num))
      {
        num = this.getRandomInt(0,20000);
      }
      this.obstacleIndexes[k] = num;
    }
  }

  populateHorseArray ()
  {
    this.userSprite = new Image();// Create new img element
    this.userSprite.src = 'horseSprite.png';
    this.computerSprite = new Image();
    PlayerHorse user = new PlayerHorse(5,userSprite);
    if (this.levelNum == 4)
    {
      this.computerSprite.src = 'cheetahSprite.png';
      RoboHorse cpu = new RoboHorse (4, computerSprite);
      horseArray = [0,0,0,0,cpu,user];
    }
    else
    {
      if (this.levelNum == 3)
      {
        this.computerSprite.src = 'zebraSprite.png';
      }
      else if (this.levelNum == 2)
      {
        this.computerSprite.src = 'camelSprite.png';
      }
      else
      {
        this.computerSprite.src = 'turtleSprite';
      }
      RoboHorse cpu1 = new RoboHorse (0, computerSprite);
      RoboHorse cpu2 = new RoboHorse (1, computerSprite);
      RoboHorse cpu3 = new RoboHorse (2, computerSprite);
      RoboHorse cpu4 = new RoboHorse (3, computerSprite);
      RoboHorse cpu5 = new RoboHorse (4, computerSprite);
      horseArray = [cpu1, cpu2, cpu3, cpu4, cpu5, user];
    }
  }

  playGame()
  {
    populateObstaclesArray ();
    populateHorseArray ();
    var canvas = document.getElementById("game");
    canvas.style.backgroundImage= this.backgroundImage;
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";
    while (!isFinished())
    {
      let result = checkGameState();
      if (result == 1)
      {
        console.log ("collision"); // needs to have an actual affect on horse at some point
      }
      else if (result == 2)
      {
        console.log ("end of race");
        break; // probably need to queue the scoreboard
      }
    }
  }

  checkGameState() {
    let playerPos = this.player.position;
    if (this.player.isJumping) {
      if (obstacles[playerPos] == true) {
          return 1;
        }
      }
      if (playerPos == 2000) {
        return 2;
      }
      return 0;

    }
  }
