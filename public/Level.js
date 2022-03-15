
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
    var canvas = document.getElementById("game");
    canvas.style.backgroundImage= this.backgroundImage;
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";
    this.timer = null;
    this.winner = null;
    this.isFinished = false;
    this.initialTime = Date.now;
    this.userPlayer = new PlayerHorse(5,0);
  }

  getRandomInt(min, max)
  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  populateObstaclesArray ()
  {
    this.numObstacles = null;
    if (this.levelNum == 1)
    {
      this.generateIndexesForObstaclesToBePlaced (4);
      this.numObstacles = 4;
    }
    else if (this.levelNum == 2)
    {
      this.generateIndexesForObstaclesToBePlaced (6);
      this.numObstacles = 6;
    }
    else if (this.levelNum == 3)
    {
      this.generateIndexesForObstaclesToBePlaced (8);
      this.numObstacles = 8;
    }
    else {
      this.generateIndexesForObstaclesToBePlaced(12);
      this.numObstacles = 12;
    }
    for (let k = 0; k < this.numObstacles; k++)
    {
      this.obstaclesArray[this.obstacleIndexes[k]] = true;
    }
  }

  generateIndexesForObstaclesToBePlaced (numObstacles)
  {
    for (let k = 0; k < numObstacles; k++)
    {
      let num = this.getRandomInt(0,20000);
      while (k != 0 && this.obstacleIndexes.includes(num))
      {
        num = this.getRandomInt(0,20000);
      }
      this.obstacleIndexes[k] = num;
    }
  }

  populateHorseArray ()
  {
    if (this.levelNum == 4)
    {
      let cpu = new RoboHorse (4, this.levelNum);
      this.horseArray = [null,null,null,null,cpu,this.userPlayer];
    }
    else
    {
      let cpu1 = new RoboHorse (0, this.levelNum);
      let cpu2 = new RoboHorse (1, this.levelNum);
      let cpu3 = new RoboHorse (2, this.levelNum);
      let cpu4 = new RoboHorse (3, this.levelNum);
      let cpu5 = new RoboHorse (4, this.levelNum);
      this.horseArray = [cpu1, cpu2, cpu3, cpu4, cpu5, this.userPlayer];
    }
  }

  playGame()
  {
    this.populateObstaclesArray ();
    this.populateHorseArray ();
    while (!this.isFinishedForAllHorses())
    {
      this.checkForHorseFinish();
      // for loop for testing purposes only
      for (let k = 0; k < this.horseArray.length; k++)
      {
        this.horseArray[k].position += 500;
      }
    }
    // need to add checkForRoboHorseFinish and run it all the time
    // can't do it right now because position isn't getting updated with our current html siutation
  }

  checkGameState() // ariana code
  {
    let playerPos = this.userPlayer.getPosition();
    console.log(this.playerPos);

    if (this.obstaclesArray[this.playerPos] == true && !this.userPlayer.isJumping)
    {
      console.log ("collision");
      return 1;
    }

    if (this.playerPos == 2000 || this.playerPos > 2000) {
      console.log ("race over");
      return 2;
    }
    return 0;
  }

  checkForHorseFinish() { // Ariana code
    for (var x = 0; x < 6; x++) {
        if (this.horseArray[x].getPosition() == 2000 || this.horseArray[x].getPosition() > 2000) {
          currentTime = Date.now;
          this.horseArray[x].setRaceTime(currentTime - initialTime);
        }
        if (this.winner == null) {
          this.winner = this.horseArray[x];
          console.log("race is over, we have a winner!");
          }
        }
    }

  isFinishedForAllHorses() { // Ariana code
    for (var x = 0; x < 5; x++)
    {
      if (this.horseArray[x].getTime() == null)
      {
        return false
      }
    }
      return true;
    }

  isWinner() { // Ariana code
    if (this.winner = this.userPlayer) {
      return true;
    }
    return false;
  }
}
