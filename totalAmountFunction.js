const amountFor = require("./amountFor");
const invoice = require("../datas/invoices.json");

module.exports = function totalAmountFunction() {
  let totalAmount = 0;

  for (let perf of invoice.performances) {
    // exibe a linha para esta requisição

    totalAmount += amountFor(perf);
  }
  return totalAmount;
};
