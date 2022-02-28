


class RoboHorse extends Horse{

  constructor (lanePos, levelNum)
  {
    super(lanePos, levelNum);
    this.lanePosition = lanePos;
    this.level = levelNum;
    this.isJumping = true;
    let possibleNames = [];
    this.maxRoboHorseVelocities = [10,20,30,70];
    this.velocity = 0;
    this.acceleration = 0;
    if (levelNum == 1)
    {
        this.possibleNames = ["Rafael", "Donnatello", "Leonardo", "Shelly", "Mr. Green", "Tuck", "Franklin", "Michaelangelo"];
    }
    else if (levelNum == 2)
    {
        this.possibleNames = ["Dessert", "Humpy", "Dehydrated", "Lawrence", "Mohammad"];
    }
    else if (levelNum == 3)
    {
        this.possibleNames = ["Cookie", "Miss Zebra", "Savannah", "Speedy", "Jordan"];
    }
    else
    {
        this.possibleNames = ["Dash"];
    }
    let name = this.generateName();
  }

  getRandomInt(min, max)
  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  generateName ()
  {
       if (this.level == 4)
       {
         return "Dash";
       }
       else
       {
         let numOfNames = this.possibleNames.length;
         let randNum = this.getRandomInt (0, numOfNames);
         return this.possibleNames[randNum];
       }
  }

  updateAcceleration()
  {
    this.maxVelo = this.maxRoboHorseVelocities [this.level-1];
    if (this.velocity < this.maxVelo)
    {
        this.acceleration += Math.random() * .08 +.02;
        console.log ("New Acceleration is " + this.acceleration);
    }
    else
    {
        console.log ("max velo already reached");
    }
  }
}
