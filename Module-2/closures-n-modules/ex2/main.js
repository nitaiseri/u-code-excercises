function Bank() {
  let money = 500;

  function depositCash(cash) {
    money += cash;
  }

  function checkBalance(word) {
    console.log(money);
  }

  return {
    deposit: depositCash,
    showBalance: checkBalance,
  };
}

const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950
