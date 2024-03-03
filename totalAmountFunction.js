const amountFor = require("./amountFor");

module.exports = function totalAmountFunction(invoice) {
  let totalAmount = 0;

  for (let perf of invoice.performances) {
    // exibe a linha para esta requisição

    totalAmount += amountFor(perf);
  }
  return totalAmount;
};
