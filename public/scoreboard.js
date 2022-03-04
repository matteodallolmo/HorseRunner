
class Scoreboard {

    constructor(){
      this.highestLevel = "Larry's House"; //PlayerStats.getHighestLevel();
      this.fastestTime = "11:30";//PlayerStats.getFastestTime();
      this.playerName = "zane"; //PlayerStats.getName();

      this.background = new Image();
      this.background.src = "./Stage Screens/scoreboard.png";

      this.afterRace = new Image();
      this.afterRace.src = "./Stage Screens/AfterRace.svg";
    }

    drawAfterLoss() {
      var canvas = document.getElementById("game");
      var ctx = canvas.getContext("2d");
      this.background.onload = () => {
        ctx.drawImage(this.background,0,0,canvas.width,canvas.height);
        ctx.font = "85px Times";
        ctx.fillStyle = "white";
        ctx.fillText(this.playerName.toUpperCase(),canvas.width/2-(ctx.measureText(this.playerName.toUpperCase()).width/2), 110);
        ctx.font = "52px Times";
        ctx.fillStyle = "white";
        ctx.fillText(this.fastestTime, 570, 233);
        ctx.fillText(this.highestLevel, 575, 290);
      }
    }

    drawAfterRace() {
      var canvas = document.getElementById("game");
      var ctx = canvas.getContext("2d");
      this.afterRace.onload = () => {
        ctx.drawImage(this.afterRace,0,0,canvas.width,canvas.height);


      }
    }
}

const scoreboard = new Scoreboard();
scoreboard.drawAfterLoss();
scoreboard.drawAfterRace();
