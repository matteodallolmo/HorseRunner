class SpriteDimensions {
  constructor(levelNum) {
    this.levelNum = levelNum;

    this.widthArr = [164, 175, 177, 44, 41];
    this.heightArr = [93, 120, 97, 39, 27];
    this.distanceBetweenArr = [30, 95, 19, 6, 5];
    this.startXArr = [38, 32, 32, 15, 4];
    this.startYArr = [24, 38, 36, 9, 5];
    this.scaleArr = [1, 1, 1, 1, 15, 2];

    this.width = this.widthArr[this.levelNum];
    this.height = this.heightArr[this.levelNum];
    this.distanceBetween = this.distanceBetweenArr[this.levelNum];
    this.startXPos = this.startXArr[this.levelNum];
    this.startYPos = this.startYArr[this.levelNum];
    this.scale = this.scaleArr[this.levelNum];
  }
}
