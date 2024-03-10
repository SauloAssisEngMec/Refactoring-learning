// const { playFor } = require("./playFor");

// function amountFor(aPerformance) {
//   let thisAmount = 0;
//   switch (playFor(aPerformance).type) {
//     case "tragedy":
//       thisAmount = 40000;
//       if (aPerformance.audience > 30) {
//         thisAmount += 1000 * (aPerformance.audience - 30);
//       }
//       break;
//     case "comedy":
//       thisAmount = 30000;
//       if (aPerformance.audience > 20) {
//         thisAmount += 10000 + 500 * (aPerformance.audience - 20);
//       }
//       thisAmount += 300 * aPerformance.audience;
//       break;
//     default:
//       throw new Error(`unknown type: ${playFor(aPerformance).type}`);
//   }
//   return thisAmount;
// }

// module.exports = amountFor;
