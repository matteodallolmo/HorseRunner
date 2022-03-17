class PlayerHorse extends Horse {
  constructor(lanePos, levelNum) {
    super(lanePos, levelNum);
    this.accelToAdd = 0;
    this.prevKey = 0;
    this.currentKey = 0;
    this.raceTime = null;
  }

  //this takes in a INT that represents the key
  //37 = leftArrow, 39 = rightArrow
  getPosition() {
    return super.position;
  }
  setRaceTime(finishedTime) {
    this.raceTime = finsishedTime;
  }
  getRaceTime() {
    return this.raceTime;
  }
  keyPressed(pressedKey) {
    this.currentKey = pressedKey;
    if (this.currentKey == 37 || this.currentKey == 39) {
      if (this.currentKey != this.prevKey) {
        this.accelToAdd += 0.05;
        this.prevKey = this.currentKey;
      } else {
        this.acceleration = 0;
        this.velocity -= 1;
      }
    }
    if (pressedKey == 32) {
      //32 is keycode for spacebar
      jump();
    }
  }

  updateAccel() {
    this.acceleration = this.acceleration + this.accelToAdd;
    this.accelToAdd = 0;
  }
}
