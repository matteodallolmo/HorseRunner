let PlayerStats = {
  highestLevelName : null,
  highestLevelNumber: null,
  fastestTime : null,
  playerName : null,

  functions: {
    setName : function(name)
    {
      PlayerStats.playerName = name;
    },

    getName: function ()
    {
      return PlayerStats.playerName;
    },

    setFastestTime : function (time)
    {
      PlayerStats.fastestTime = time;
    },

    getFastestTime : function ()
    {
      return PlayerStats.fastestTime;
    },

    setHighestLevelName : function (name)
    {
      PlayerStats.highestLevelName = name;
    },

    getHighestLevelName : function ()
    {
      return PlayerStats.highestLevelName;
    },

    setHighestLevelNumber : function (newHighNum)
    {
      PlayerStats.highestLevelNumber = newHighNum;
    },

    getHighestLevelNumber : function ()
    {
      return PlayerStats.highestLevelNumber;
    }
  }
}
