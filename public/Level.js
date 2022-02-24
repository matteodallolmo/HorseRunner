class Level {
  constructor(levelNumber) {
    this.obstacles = [2000];
    this.levelNumber = levelNumber;
    this.player = new PlayerHorse([left, right], "space");
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
