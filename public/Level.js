
class Level {
  constructor(levelNumber) {
    this.levelNum = levelNumber;
    this.refreshTime = 60; //fps
    this.obstaclesArray = [];
    this.obstaclesArray.length = 20000;
    this.obstacleIndexes = [];
    this.backgroundImage = new Image();// Create new img element
    this.backgroundImage.src = './Track/CompleteTrack.png'; // Set source path
    var canvas = document.getElementById("game");
    canvas.style.backgroundImage= this.backgroundImage;
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";
    this.timer = null;
    this.winner = null;
    this.won = null;
    this.lost = null;
    this.initialTime = Date.now;
    this.horsePerLane = [];
    console.log ('level created');
    this.isFinished = false;
    this.initialTime = Date.now;
    this.userSprite = new Image();// Create new img element
    this.userSprite.src = './Sprites/horseSprite.png';
    this.player = new PlayerHorse(3,this.userSprite);
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

  populateHorsePerLane ()
  {
    if (this.levelNum == 4)
    {
      let cpu = new RoboHorse (4, this.levelNum);
      this.horsePerLane = [null,null,null,null,cpu,this.userPlayer];
    }
    else
    {
      let cpu1 = new RoboHorse (0, this.levelNum);
      let cpu2 = new RoboHorse (1, this.levelNum);
      let cpu4 = new RoboHorse (3, this.levelNum);
      let cpu5 = new RoboHorse (4, this.levelNum);
      let cpu6 = new RoboHorse (5, this.levelNum);

      this.horsePerLane = [cpu1, cpu2, this.player, cpu3, cpu4, cpu5];
    }
  }

  playGame()
  {
    this.populateObstaclesArray ();
    this.populateHorsePerLane ();
    while (!this.isFinishedForAllHorses())
    {
      this.checkForRoboHorseFinish();
      // for loop for testing purposes only
      for (let k = 0; k < this.horsePerLane.length; k++)
      {
        this.horsePerLane[k].position += 500;
      }
    }
    // need to add checkForRoboHorseFinish and run it all the time
    // can't do it right now because position isn't getting updated with our current html siutation
  }

  checkGameState() {
    let playerPos = this.player.position;
    console.log(playerPos);

    if (this.obstaclesArray[playerPos] == true && !this.player.isJumping) {
      return 1;
    }
    if (playerPos == 2000) {
      this.currentTime  = Date.now;
      this.player.raceTime = (currentTime - this.initialTime);
      if (this.winner == null)
      {
        this.winner = this.player;
      }
      return 2;

    }
    return 0;

  }

  checkForRoboHorseFinish()//checks for a robohorse finish and updates its race time when it does. Also sets winner to that horse if it was first to finish
  {
    for (var x = 0; x < 5; x++) {
      if (x != 3) {
        if (this.horsePerLane[x].position == 2000) {
          this.currentTime = Date.now;
          this.horsePerLane[x].raceTime= (this.currentTime - this.initialTime);
          if (this.winner == null) {
            this.winner = this.horsePerLane[x];
          }
        }
      }
    }
  }

  isFinishedForAllHorses() {
    for (var x = 0; x < 5; x++)
    {
      if (this.horsePerLane[x].raceTime != null) {}
      else {
        return false;
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

  win(){
    this.won = true;
    this.lost = false;
    this.backgroundImage = "url('Stage Screens/scoreboard.png')";
    var canvas = document.getElementById("game");
    canvas.style.backgroundImage = this.backgroundImage;
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";
  }

  lose(){
    this.lost = true;
    this.won = false;
    this.backgroundImage = "url('Stage Screens/GameOver.png')";
    var canvas = document.getElementById("game");
    canvas.style.backgroundImage = this.backgroundImage;
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";
  }


  handleCollision() {
    this.player.velocity = 0;
    this.player.acceleration = 0;
    //also needs to disable uncklickable, but we don't have any event listeners for that right now.
  }

}
