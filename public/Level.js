class Level {
  constructor(levelNumber) {
    this.obstacles = new Array(2000);
    this.levelNumber = levelNumber;
    this.winner = null;
    this.isFinished;
    this.player = new PlayerHorse(1, 1); //temp parameters
    this.initialTime = Date.now;
    this.horsePerLane = [new RoboHorse(this.levelNumber), new RoboHorse(this.levelNumber), this.player, new RoboHorse(this.levelNumber), new RoboHorse(this.levelNumber), new RoboHorse(this.levelNumber)]
  }

  playGame() {
    //make the keys clickable
    //initiate a countdown
    //set intervals to constantly checkGameState() and checkRoboHorseFinish() and isFinishedForAllHorses() which ends the intervals once it is finished.
    //once done then call UI with result.
  }

  checkGameState() {
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

  checkForRoboHorseFinish() {
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

  isFinishedForAllHorses() {
    for (var x = 0; x < 5; x++) {
      if (this.horsePerLane[x].getTime() != null) {} else {
        return false;
      }
      return true;
    }
  }

  isWinner() {
    if (this.winner = this.player) {
      return true;
    }
    return false;
  }

  win(){

  }

  lose(){

  }


  handleCollision() {}

}
