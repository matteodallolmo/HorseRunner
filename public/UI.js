class UI
{
  let currentLevel;
  constructor()
  {
    document.body.style.backgroundImage = "url('TitleCard.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    currentLevel = new Level (1);
    checkGameState();
  }


}
