class roboHorse extends Horse{

  constructor (levelNum)
  {
    this.isJumping = true;
    let possibleNames = [];
    let maxRoboHorseVelocities = [10, 20, 30, 70];
    let name = null;
    this.velocity = 0;
    generateName();
    createRoboHorseImage(levelNum);
    for (let i = 0; i < 4; i++)
    {
        let nameList = [];
        if (i == 0)
        {
          nameList = ["Rafael", "Donnatello", "Leonardo", "Shelly", "Mr. Green", "Tuck", "Franklin", "Michaelangelo"];
        }
        if (i == 1)
        {
          nameList = ["Dessert", "Humpy", "Dehydrated", "Lawrence", "Mohammad"];
        }
        if (i == 2)
        {
          nameList = ["Cookie", "Miss Zebra", "Savannah", "Speedy", "Jordan"];
        }
        if (i == 3)
        {
          nameList = ["Dash"];
        }
        possibleNames[i] = nameList;
    }
  }
  updateAcceleration(levelNum)
  {
    if (this.velocity < this.maxRoboHorseVelocities[levelNum-1])
    {
        this.acceleration = Math.floor(Math.random() * .08)+.02;
    }
  }
  generateName (levelNum)
  {
       if (levelNum == 4)
       {
         name = "Dash";
       }
       else
       {
         let randNum = Math.floor(Math.random() * possibleNames[levelNum-1].length);
         name = possibleNames[levelNum-1][randNum];
       }
  }
}
