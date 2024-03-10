const plays = require("../datas/plays.json");

function playFor(aPerformance) {
  return plays[aPerformance.playID];
}

module.exports = { playFor, plays };
