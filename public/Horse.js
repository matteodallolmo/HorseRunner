
class Horse{
  constructor(lanePos,levelNum){
    this.position = 0;
    this.lanePosition = lanePos;//the verticle position of the Horse when not jumping
    this.spriteLength = 197; //width of sprite
    this.spriteHeight = 158; //length of sprite
    this.recentlyJumped = false; // determines jumping cooldown to make jump less spammable
    this.isJumping = false; // stores whether the horse is jumping
    this.velocity = 0; // velocity of the horse
    this.acceleration = 0; // acceleration of the horse
    this.horseSprite = new Image();
    if (this.levelNum == 3)
    {
      this.horseSprite.src = './zebraSprite.png';
    }
    else if (this.levelNum == 2)
    {
      this.horseSprite.src = './camelSprite.png';
    }
    else if (this.levelNum == 1)
    {
      this.horseSprite.src = './turtleSprite.png';
    }
    else {
      this.horseSprite.src = './cheetahSprite.png';
    }
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
  animate(velocity){
    //sets animation-duration of sprite(css) to 6*Velocity, animation-timing-function to steps(6). Used every frame.
    //someone else needs to complete this.
  }
}
