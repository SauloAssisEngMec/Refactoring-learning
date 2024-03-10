const amountFor = require("./amountFor");
const invoices = require("../datas/invoices.json");
const { playFor } = require("./playFor");

const USDFormat = require("./USDFormat");
const totalVolumeCredits = require("./totalVolumeCredits");
const totalAmountFunction = require("./totalAmountFunction");

function statement(invoice) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);

  return renderText(statementData, invoice);
}

/// functions

function renderText(data) {
  let result = `Statement for ${data.customer}\n`;

  for (let perf of data.performances) {
    // exibe a linha para esta requisição
    result += ` ${playFor(perf).name}: ${USDFormat(amountFor(perf) / 100)} (${
      perf.audience
    } seats)\n`;
  }

  result += `Amount owed is ${USDFormat(totalAmountFunction() / 100)}\n`;
  result += `You earned ${totalVolumeCredits()} credits\n`;
  return result;
}

function enrichPerformance(aPerformance) {
  const result = Object.assign({}, aPerformance);
  return result;
}
// console.log(statement(invoice, plays));

console.log(statement(invoices));
