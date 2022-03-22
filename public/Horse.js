class Horse {

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

  jump() {
     if (this.recentlyJumped == true) {
       return;
     }
     this.recentlyJumped = true;
     let acc = -0.2;
     const jump = setInterval(() => {
       if (acc <= 0.21) {
         this.lanePosition += acc * this.spriteDims.height;
         acc += 0.01;
       }
     }, 10);
     setTimeout(() => {
       clearInterval(jump);
       this.recentlyJumped = false;
     }, 600);
   }

  drawFrame(canvas, ctx, frameNum, canvasX)
  {
    ctx.drawImage(this.img, this.spriteDims.startXPos+(this.spriteDims.width+this.spriteDims.distanceBetween)*frameNum, this.spriteDims.startYPos, this.spriteDims.width, this.spriteDims.height, canvasX, this.lanePosition, this.spriteDims.width*this.spriteDims.scale, this.spriteDims.height*this.spriteDims.scale);
  }


startGame()
{
  setTimeout(() => {
    let canvas = document.getElementById("game");
    let ctx = canvas.getContext('2d');
    //this.backgroundImage = new Image(canvas.width,canvas.height);
  //  this.backgroundImage.src = './Stage-Screens/TitleCard.png';
    //ctx.drawImage(this.backgroundImage,0,0,canvas.width, canvas.height);
    ctx.clearRect(0,0, canvas.width, canvas.height);
    this.backgroundImage = new Image(canvas.width,canvas.height);
    this.backgroundImage.src = './Track/CompleteTrack.png';
    ctx.drawImage(this.backgroundImage,0,0,canvas.width, canvas.height);

  },400)

}


//repository matteo
animate()
  {

    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    this.drawFrame(canvas, ctx, this.cycleLoop[this.currentLoopIndex], this.position);

    this.currentLoopIndex++;
    if (this.currentLoopIndex >= this.cycleLoop.length)
    {
      this.currentLoopIndex = 0;
    }

    this.movement(1);
    
    window.requestAnimationFrame(this.startGame.bind(this));
    window.requestAnimationFrame(this.animate.bind(this));
  }


  setRaceTime(time)
  {
    this.raceTime = time;
  }

  getTime()
  {
    return this.raceTime;
  }
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
    this.recentlyJumped = false; // determines jumping cooldown to make jump less spammable
    this.isJumping = false; // stores whether the horse is jumping
    this.velocity = 0; // velocity of the horse
    this.acceleration = 0; // acceleration of the horse
    this.raceTime = null; //the time it took for the horse to finish, is null if hasn't finished yet
    this.spriteSheet = this.spriteArray[levelNum]; // sprite sheet of the horse, animate by css
    this.img = new Image();
    this.img.src = this.spriteSheet;
    this.spriteDims = new SpriteDimensions(levelNum);
    this.cycleLoop = [0, 1, 2, 3, 4, 5];
    this.currentLoopIndex = 0;
  }

}
