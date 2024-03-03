const { playFor } = require("./playFor");

function volumeCreditsFor(aPerformance) {
  let volumeCredits = 0;
  volumeCredits += Math.max(aPerformance.audience - 30, 0);
  // soma um crédito extra para cada dez espectadores de comédia
  if ("comedy" === playFor(aPerformance).type)
    volumeCredits += Math.floor(aPerformance.audience / 5);
  return volumeCredits;
}

module.exports = volumeCreditsFor;
