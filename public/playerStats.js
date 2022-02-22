let playerStats = {
  highestLevelName : null,
  highestLevelNumber: null,
  fastestTime : null,
  playerName : null,

  functions: {
    setName : function(name)
    {
      playerStats.playerName = name;
    },

    getName: function ()
    {
      return playerStats.playerName;
    },

    setFastestTime : function (time)
    {
      playerStats.fastestTime = time;
    },

    getFastestTime : function ()
    {
      return playerStats.fastestTime;
    },

    setHighestLevelName : function (name)
    {
      playerStats.highestLevelName = name;
    },

    getHighestLevelName : function ()
    {
      return playerStats.highestLevelName;
    },

    setHighestLevelNumber : function (newHighNum)
    {
      playerStats.highestLevelNumber = newHighNum;
    },

    getHighestLevelNumber : function ()
    {
      return playerStats.highestLevelNumber;
    }
  }
}
