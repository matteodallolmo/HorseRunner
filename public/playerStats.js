let playerStats = {
  highestLevel : null,
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

    setHighestLevel : function (newHigh)
    {
      playerStats.highestLevel = newHigh;
    },

    getHighestLevel : function ()
    {
      return playerStats.highestLevel;
    }
  }
}
