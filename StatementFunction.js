const amountFor = require("./amountFor");
const invoices = require("../invoices.json");
const { playFor } = require("./playFor");

const USDFormat = require("./USDFormat");
const totalVolumeCredits = require("./totalVolumeCredits");
const totalAmountFunction = require("./totalAmountFunction");

function statement(invoice) {
  let result = `Statement for ${invoice.customer}\n`;

  for (let perf of invoice.performances) {
    // exibe a linha para esta requisição
    result += ` ${playFor(perf).name}: ${USDFormat(amountFor(perf) / 100)} (${
      perf.audience
    } seats)\n`;
  }

  result += `Amount owed is ${USDFormat(totalAmountFunction(invoice) / 100)}\n`;
  result += `You earned ${totalVolumeCredits(invoice)} credits\n`;
  return result;
}

// console.log(statement(invoice, plays));

console.log(statement(invoices));
