class Scoreboard {
  constructor() {
    this.highestLevel = "Larry's House"; //PlayerStats.getHighestLevel();
    this.fastestTime = "11:30"; //PlayerStats.getFastestTime();
    this.playerName = "zane"; //PlayerStats.getName();
    //document.body.style.backgroundImage = "url('Stage Screens/scoreboard.png')";
    //document.body.style.backgroundRepeat = "no-repeat";
    //document.body.style.backgroundSize = "cover";
    this.background = new Image();
    this.background.src = "./Stage Screens/scoreboard.png";
  }

  draw() {
    var canvas = document.getElementById("game");
    var ctx = canvas.getContext("2d");
    this.background.onload = () => {
      ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
      ctx.font = "85px Times";
      ctx.fillStyle = "white";
      ctx.fillText(
        this.playerName.toUpperCase(),
        canvas.width / 2 -
          ctx.measureText(this.playerName.toUpperCase()).width / 2,
        110
      );
      ctx.font = "52px Times";
      ctx.fillStyle = "white";
      ctx.fillText(this.fastestTime, 570, 233);
      ctx.fillText(this.highestLevel, 575, 290);
    };
  }
}

const scoreboard = new Scoreboard();
scoreboard.draw();
