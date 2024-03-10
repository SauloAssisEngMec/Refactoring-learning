const invoices = require("../datas/invoices.json");

const plays = require("../datas/plays.json");

function statement(invoice) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  console.log(statementData);

  return renderText(statementData, invoice);
}

/// auxiliar functions

function renderText(data) {
  let result = `Statement for ${data.customer}\n`;

  for (let perf of data.performances) {
    // exibe a linha para esta requisição
    console.log(perf);
    result += ` ${perf.play.name}: ${USDFormat(amountFor(perf) / 100)} (${
      perf.audience
    } seats)\n`;
  }

  result += `Amount owed is ${USDFormat(totalAmountFunction(data) / 100)}\n`;
  result += `You earned ${totalVolumeCredits(data)} credits\n`;
  return result;
}

function enrichPerformance(aPerformance) {
  const result = Object.assign({}, aPerformance);
  result.play = playFor(result);
  return result;
}

function playFor(aPerformance) {
  return plays[aPerformance.playID];
}

function totalAmountFunction(data) {
  let totalAmount = 0;

  for (let perf of data.performances) {
    // exibe a linha para esta requisição

    totalAmount += amountFor(perf);
  }
  return totalAmount;
}

function totalVolumeCredits(data) {
  let volumeCredits = 0;
  for (let perf of data.performances) {
    // soma créditos por volume
    volumeCredits += volumeCreditsFor(perf);
  }

  return volumeCredits;
}
function USDFormat(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

function volumeCreditsFor(aPerformance) {
  let volumeCredits = 0;
  volumeCredits += Math.max(aPerformance.audience - 30, 0);
  // soma um crédito extra para cada dez espectadores de comédia
  if ("comedy" === aPerformance.play.type)
    volumeCredits += Math.floor(aPerformance.audience / 5);
  return volumeCredits;
}

function amountFor(aPerformance) {
  let thisAmount = 0;
  switch (aPerformance.play.type) {
    case "tragedy":
      thisAmount = 40000;
      if (aPerformance.audience > 30) {
        thisAmount += 1000 * (aPerformance.audience - 30);
      }
      break;
    case "comedy":
      thisAmount = 30000;
      if (aPerformance.audience > 20) {
        thisAmount += 10000 + 500 * (aPerformance.audience - 20);
      }
      thisAmount += 300 * aPerformance.audience;
      break;
    default:
      throw new Error(`unknown type: ${aPerformance.play.type}`);
  }
  return thisAmount;
}
// console.log(statement(invoice, plays));

console.log(statement(invoices));
