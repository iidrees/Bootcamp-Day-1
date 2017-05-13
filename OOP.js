class GTBankAccount {
	constructor(holderName, accNumber, address,minimumBalance, currentBalance) {
		this._holderName = holderName;
		this._accNumber = accNumber;
		this._address = address;
		this._minimumBalance = minimumBalance;
		this._currentBalance = currentBalance;
		
	}
    get fullAccountDetails() {
	    let details = {
	    	name: this._holderName,
	    	accNumber: this._accNumber,
	    	address: this._address,
	    	minBal: this._minimumBalance,
	    	currBal: this._currentBalance
	     };
	     return details;
	  }
    get minBalanceDetails() {
        return this._currentBalance;
    }
  
  
    accDeposit(depositAmt) {
        return 'Thank you for banking with us, your current Balance now is ' + (this._currentBalance +=  depositAmt);
		
	}


	accWithdrawal(amount) {
		if (amount > this._currentBalance) {
			return 'Please your account balance is insufficient';
		} else {
			return 'Thank you for banking with us, your current Balance now is ' + (this._currentBalance -=  amount);
		}
	}
}

class GTSavingsAccount extends GTBankAccount {
	constructor(holderName, accNumber, address,minimumBalance, currentBalance) {
		super(holderName, accNumber, address,minimumBalance, currentBalance);
		
	}

	addAccountHolders(GTBankAccount) {
	    let savingsAccountHolders = [];
		savingsAccountHolders.push(GTBankAccount);
		return savingsAccountHolders;
	}
	

	}

class GTCurrentAccount extends GTBankAccount {
	constructor (holderName, accNumber, address,minimumBalance, currentBalance) {
		super(holderName, accNumber, address,minimumBalance, currentBalance);
		
	}

	addAccountHolders(GTBankAccount) {
	    let currentAccountHolders = [];
	    this.currentAccountHolders.push(GTBankAccount);
	}
}