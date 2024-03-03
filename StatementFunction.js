const amountFor = require("./amountFor");
const invoices = require("../invoices.json");
const { playFor } = require("./playFor");
const volumeCreditsFor = require("./volumeCreditsFor");
const USDFormat = require("./USDFormat");

function statement(invoice) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;

  for (let perf of invoice.performances) {
    // soma créditos por volume
    volumeCredits += volumeCreditsFor(perf);
    // exibe a linha para esta requisição
    result += ` ${playFor(perf).name}: ${USDFormat(amountFor(perf) / 100)} (${
      perf.audience
    } seats)\n`;
    totalAmount += amountFor(perf);
  }

  result += `Amount owed is ${USDFormat(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  return result;
}

// console.log(statement(invoice, plays));

console.log(statement(invoices));
