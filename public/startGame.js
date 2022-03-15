class startGame{

  startScreen()
  {
    //intializes home screen
    setTimeout(() => {
      let canvas = document.getElementById("game");
      let ctx = canvas.getContext('2d');
      //this.backgroundImage = new Image(canvas.width,canvas.height);
    //  this.backgroundImage.src = './Stage-Screens/TitleCard.png';
      //ctx.drawImage(this.backgroundImage,0,0,canvas.width, canvas.height);
      ctx.clearRect(0,0, canvas.width, canvas.height);
      this.backgroundImage = new Image(canvas.width,canvas.height);
      this.backgroundImage.src = './StageScreens/TitleCard.svg';
      ctx.drawImage(this.backgroundImage,0,0,canvas.width, canvas.height);

    },400)

  }
//intializes the track
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
//creates camels and assigns
  gameStarter()
  {
    let canvas = document.getElementById("game");
    let ctx = canvas.getContext('2d');
    let self = this;
    this.startScreen();

      this.canvas.addEventListener("click", function (evt) {


        self.startGame()
        let camel = new Horse(240,2);

         let camel1 = new Horse(320,2);

         let camel2 = new Horse(400,2);

         let camel3 = new Horse(480,2);
        setTimeout(()=>{
          camel1.animate();
          camel.animate();
          camel2.animate();
          camel3.animate();
        },1000)




setTimeout(()=>{  camel3.velocity = 1+Math.random()+Math.random();
  camel2.velocity =1+ Math.random()+Math.random();
  camel1.velocity = 1+ Math.random()+Math.random();
  camel.velocity = 1+ Math.random()+Math.random();},3000)



      })
  }

  constructor(){
    this.backgroundImage = new Image();// Create new img element
    this.backgroundImage.src = './StageScreens/TitleCard.svg'; // Set source path
    this.canvas = document.getElementById('game')
    this.ctx = this.canvas.getContext('2d')
    this.ctx.drawImage(this.backgroundImage,0,0,this.canvas.width,this.canvas.height)
    this.gameStarter();
  }
}
