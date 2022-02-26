
class Horse{
  constructor(lanePos,levelNum)//level 0 for PlayerHorse
  {
    this.spriteArray = [
      "Sprites/horseSprite.png",
      "Sprites/turtleSprite.png",
      "Sprites/camelSprite.png",
      "Sprites/zebraSprite.png",
      "Sprites/cheetahSprite.png"];

    this.position = 0;
    this.lanePosition = lanePos;//the verticle position of the Horse when not jumping
    this.spriteLength = 197; //width of sprite
    this.spriteHeight = 158; //length of sprite
    this.recentlyJumped = false; // determines jumping cooldown to make jump less spammable
    this.isJumping = false; // stores whether the horse is jumping
    this.velocity = 0; // velocity of the horse
    this.acceleration = 0; // acceleration of the horse
    this.spriteSheet = this.spriteArray[levelNum]; // sprite sheet of the horse, animate by css
    this.img = new Image();
    this.img.src = this.spriteSheet;

    this.cycleLoop = [0, 1, 2, 3, 4, 5];
    this.currentLoopIndex = 0;
  }
  movement(time){//move expected amount of space over the refresh time
  //run every frame when enabled
  //time is a temporary variable that we might have to change
  //time represents the time between each frame
    this.position = this.position+this.velocity*(time)+this.acceleration/2*(time^2);
  }
  genVelocity(time){
  //time is a temporary variable that we might have to change
  //time represents the time between each frame
    this.velocity = this.velocity+this.acceleration*(time);
  }
  jump(){
    if (this.recentlyJumped == true) {
      return
    }
    this.isJumping=true;
    this.recentlyJumped=true;
    setTimeout(()=>{this.isJumping=false},1000);
    setTimeout(()=>{this.recentlyJumped=false},500);
    //someone has to figure out the animation here.
  }

  drawFrame(canvas, ctx, frameNum, canvasX)
  {
    const scale = 1;
    const width = 164;
    const height = 93;
    const startXPos = 38;
    const startYPos = 24;

    ctx.drawImage(this.img, startXPos+(width+30)*frameNum, startYPos, width, height, canvasX, this.lanePosition, width*scale, height*scale);
  }

  animate(keyFrame, velocity, spriteSize)
    {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawFrame(canvas, ctx, this.cycleLoop[this.currentLoopIndex], 0);

    this.currentLoopIndex++;

    if (this.currentLoopIndex >= this.cycleLoop.length) {
        this.currentLoopIndex = 0;
    }
    requestAnimationFrame(this.animate);
  }

  initializeAnimation() {
    requestAnimationFrame(this.animate);
  }

}
