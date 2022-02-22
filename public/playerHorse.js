class playerHorse extends Horse
{
  constructor() {
    let accelToAdd = 0;
    let prevKey = 0;
    let currentKey = 0;
  }

  //this takes in a INT that represents the key
  //37 = leftArrow, 39 = rightArrow
  keyPressed(pressedKey)
  {
    if(pressedKey == 37 || pressedKey == 39)
    {
      if(pressedKey != prevKey)
      {
        accelToAdd += 0.05;
        prevKey == currentKey;
      }
      else
      {
        acceleration = 0;
        velocity -= 1;
      }
    }
    if(pressedKey == 32)//32 is keycode for spacebar
    {
      jump()
    }
  }

  updateAccel()
  {
    acceleration = acceleration+accelToAdd;
    accelToAdd = 0;
  }
}
