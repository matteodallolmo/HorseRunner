class SpriteDimensions {
  constructor(levelNum) {
    this.levelNum = levelNum;

    this.widthArr = [164, 175, 177, 43, 41]
    this.heightArr = [93, 120, 97, 40, 28]
    this.distanceBetweenArr = [30, 93, 19, 6, 7]
    this.startXArr = [38, 32, 32, 14, 3]
    this.startYArr = [24, 38, 36, 9, 6]
    this.scaleArr = [1, 1, 1, 3, 3.2]

    this.width = this.widthArr[this.levelNum]
    this.height = this.heightArr[this.levelNum]
    this.distanceBetween = this.distanceBetweenArr[this.levelNum]
    this.startXPos = this.startXArr[this.levelNum]
    this.startYPos = this.startYArr[this.levelNum]
    this.scale = this.scaleArr[this.levelNum]
  }

}
