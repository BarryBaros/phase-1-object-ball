function gameObject() {
  return {
      home: {
          teamName: "Brooklyn Nets",
          colors: ["Black", "White"],
          players: {
              "Alan Anderson": {
                  number: 0,
                  shoe: 16,
                  points: 22,
                  rebounds: 12,
                  assists: 12,
                  Steals: 3,
                  Blocks: 1,
                  SlumDunks: 1
              },
              "Reggie Evans": {
                  number: 30,
                  shoe: 14,
                  points: 12,
                  rebounds: 12,
                  assists: 12,
                  Steals: 12,
                  Blocks: 12,
                  SlumDunks: 7
              },
              "Brook Lopez": {
                  number: 11,
                  shoe: 17,
                  points: 17,
                  rebounds: 19,
                  assists: 10,
                  Steals: 3,
                  Blocks: 1,
                  SlumDunks: 5
              },
              "Mason Plumlee": {
                  number: 1,
                  shoe: 19,
                  points: 26,
                  rebounds: 12,
                  assists: 6,
                  Steals: 3,
                  Blocks: 8,
                  SlumDunks: 5
              },
              "Jason Terry": {
                  number: 31,
                  shoe: 15,
                  points: 19,
                  rebounds: 2,
                  assists: 2,
                  Steals: 4,
                  Blocks: 11,
                  SlumDunks: 1
              }
          }
      },
      away: {
          teamName: "Charlotte Hornets",
          colors: ["Turquoise", "Purple"],
          players: {
              "Jeff Adrien": {
                  number: 4,
                  shoe: 18,
                  points: 10,
                  rebounds: 1,
                  assists: 1,
                  steals: 2,
                  blocks: 7,
                  slamDunks: 2
              },
              "Bismak Biyombo": {
                  number: 0,
                  shoe: 16,
                  points: 12,
                  rebounds: 4,
                  assists: 7,
                  steals: 7,
                  blocks: 15,
                  slamDunks: 10
              },
              "DeSagna Diop": {
                  number: 2,
                  shoe: 14,
                  points: 24,
                  rebounds: 12,
                  assists: 12,
                  steals: 4,
                  blocks: 5,
                  slamDunks: 5
              },
              "Ben Gordon": {
                  number: 8,
                  shoe: 15,
                  points: 33,
                  rebounds: 3,
                  assists: 2,
                  steals: 1,
                  blocks: 1,
                  slamDunks: 0
              },
              "Brendan Haywood": {
                  number: 33,
                  shoe: 15,
                  points: 6,
                  rebounds: 12,
                  assists: 12,
                  steals: 22,
                  blocks: 5,
                  slamDunks: 12
              }
          }
      }
  };
}

function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}

function awayTeamName() {
  return gameObject()["away"]["teamName"];
}

function numPointsScored(playerName) {
  for (let player in gameObject().home.players) {
      if (player === playerName) {
          return gameObject().home.players[player].points;
      }
  }

  for (let player in gameObject().away.players) {
      if (player === playerName) {
          return gameObject().away.players[player].points;
      }
  }
}

function shoeSize(playerName) {
  let players = gameObject();
  for (let player in players.home.players) {
      if (player === playerName) {
          return players.home.players[player].shoe;
      }
  }
  for (let player in players.away.players) {
      if (player === playerName) {
          return players.away.players[player].shoe;
      }
  }
  return null; // Return null if player is not found
}

function teamColors(teamName) {
    let teams = gameObject();
    if (teamName === "home") {
        return teams.home.colors;
    } else if (teamName === "away") {
        return teams.away.colors;
    } else {
        return "Team not found";
    }
}

function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    let game = gameObject();
    if (teamName === game.home.teamName) {
        return Object.values(game.home.players).map(player => player.number);
    } else if (teamName === game.away.teamName) {
        return Object.values(game.away.players).map(player => player.number);
    } else {
        return [];
    }
}

function playerStats(playerName) {
    let game = gameObject();
    for (let player in game.home.players) {
        if (player === playerName) {
            return game.home.players[player];
        }
    }
    for (let player in game.away.players) {
        if (player === playerName) {
            return game.away.players[player];
        }
    }
 }

function bigShoeRebounds() {
    let game = gameObject();
    let biggestSize = 0;
    let playerWithLargestShoe = null;

    for (let player in game.home.players) {
        if (game.home.players[player].shoe > biggestSize) {
            biggestSize  = game.home.players[player].shoe;
            playerWithLargestShoe = game.home.players[player];
        }
    }

    // Iterate over away team players
    for (let player in game.away.players) {
        if (game.away.players[player].shoe > biggestSize) {
            biggestSize = game.away.players[player].shoe;
            playerWithLargestShoe = game.away.players[player];
        }
    }
    // Return number of rebounds of player with largest shoe size
    return playerWithLargestShoe.rebounds;
}


function mostPointsScored() {
    let game = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints = null;

    for (let player in game.home.players) {
        if (game.home.players[player].points > mostPoints) {
            mostPoints = game.home.players[player].points;
            playerWithMostPoints = player;
        }
    }

    for (let player in game.away.players) {
        if (game.away.players[player].points > mostPoints) {
            mostPoints = game.away.players[player].points;
            playerWithMostPoints = player;
        }
    }

    return playerWithMostPoints;
}


function winningTeam() {
    let game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    // Calculate total points for the home team
    for (let player in game.home.players) {
        homePoints += game.home.players[player].points;
    }

    // Calculate total points for the away team
    for (let player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }

    // Compare total points to determine the winning team
    if (homePoints > awayPoints) {
        return game.home.teamName;
    } else if (awayPoints > homePoints) {
        return game.away.teamName;
    } else {
        return "It's a tie!";
    }
}

function playerWithLongestName() {
    let game = gameObject();
    let longestName = "";

    for (let player in game.home.players) {
        if (player.length > longestName.length) {
            longestName = player;
        }
    }
    
    for (let player in game.away.players) {
        if (player.length > longestName.length) {
            longestName = player;
        }
    }

    return longestName;
}


function doesLongNameStealATon() {
    let game = gameObject();
    let longestName = "";
    
    for (let player in game.home.players) {
        if (player.length > longestName.length) {
            longestName = player;
        }
    }

    for (let player in game.away.players) {
        if (player.length > longestName.length) {
            longestName = player;
        }
    }

    let mostStealsPlayer;
    let mostSteals = 0;

    for (let player in game.home.players) {
        if (game.home.players[player].Steals > mostSteals) {
            mostSteals = game.home.players[player].Steals;
            mostStealsPlayer = player;
        }
    }

    for (let player in game.away.players) {
        if (game.away.players[player].Steals > mostSteals) {
            mostSteals = game.away.players[player].Steals;
            mostStealsPlayer = player;
        }
    }

    return mostStealsPlayer === longestName;
}



console.log(homeTeamName());
console.log(awayTeamName());
console.table(gameObject());
console.log(numPointsScored("Alan Anderson"));
console.log(shoeSize("Jeff Adrien"));
console.log(teamColors("home"));
console.log(teamColors("away"));
console.log(teamNames());
console.log(playerNumbers("Brooklyn Nets"));
console.log(playerNumbers("Charlotte Hornets"));
console.log(playerStats("Bismak Biyombo"));
console.log(bigShoeRebounds());
console.log(mostPointsScored());
console.log(winningTeam());
console.log(playerWithLongestName());
console.log(doesLongNameStealATon());
