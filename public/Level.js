
class Level {
  constructor(levelNumber) {
    this.levelNum = levelNumber;
    this.refreshTime = 60; //fps
    this.obstaclesArray = [];
    this.obstaclesArray.length = 20000;
    this.horseArray = [];
    this.obstacleIndexes = [];
    this.backgroundImage = new Image();// Create new img element
    this.backgroundImage.src = './Track/CompleteTrack.png'; // Set source path
    this.timer = null;
    this.winner = null;
    this.isFinished = false;
    this.initialTime = Date.now;
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
    for (let k = 0; k < 20000; k++)
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
    for (let k = 0; k < numObstacles; k++)
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
    let user = new PlayerHorse(5,userSprite);
    if (this.levelNum == 4)
    {
      this.computerSprite.src = 'cheetahSprite.png';
      let cpu = new RoboHorse (4, computerSprite);
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
      let cpu1 = new RoboHorse (0, computerSprite);
      let cpu2 = new RoboHorse (1, computerSprite);
      let cpu3 = new RoboHorse (2, computerSprite);
      let cpu4 = new RoboHorse (3, computerSprite);
      let cpu5 = new RoboHorse (4, computerSprite);
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
    while (!isFinishedForAllHorses())
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

  checkGameState() { // Ariana code
    let playerPos = this.player.getPosition();
    console.log(playerPos);

    if (obstacles[playerPos] == true && !this.player.isJumping) {
      return 1;
    }
    if (playerPos == 2000) {
      return 2;
    }
    return 0;
  }

  checkForRoboHorseFinish() { // Ariana code
    for (var x = 0; x < 5; x++) {
      if (x != 3) {
        if (this.horsePerLane[x].getPosition() == 2000) {
          currentTime = Date.now;
          this.horsePerLane[x].setRaceTime(currentTime - initialTime);
          if (this.winner == null) {
            this.winner = this.horsePerLane[x];
          }
        }
      }
    }
  }

  isFinishedForAllHorses() { // Ariana code
    for (var x = 0; x < 5; x++) {
      if (this.horsePerLane[x].getTime() != null) {} else {
        return false;
      }
      return true;
    }
  }

  isWinner() { // Ariana code
    if (this.winner = this.player) {
      return true;
    }
    return false;
  }
