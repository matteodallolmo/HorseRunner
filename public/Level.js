


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
    if (this.levelNum == 4)
    {
      this.computerSprite = new Image();
      this.computerSprite.src = 'cheetahSprite.png';
      PlayerHorse user = new PlayerHorse(5,userSprite);
      RoboHorse cpu = new RoboHorse (4, computerSprite);
      horseArray = [0,0,0,0,cpu,user];
    }
    else if (this.levelNum == 3)
    {
      
    }
  }

  playGame()
  {
    populateObstaclesArray ();

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
