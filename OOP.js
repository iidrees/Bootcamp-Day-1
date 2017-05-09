class GTBankAccount {
		constructor(holderName, accNumber, address,minimumBalance, currentBalance) {
			this._holderName = holderName;
			this_accNumber = accNumber;
			this._address = address;
			this_currentBalance = currentBalance;
			this_minimumBalance = minimumBalance;
		}
	    getFullAccountDetails() {
		    return '${this._holderName} ${this.address} ${this.address} ${this.minimumBalance} ${this.currentBalance} ';
		}
	}

	getMinBalanceDetails() {
		return this.currentBalance;
	}

	accDeposit(depositeAmt) {
		return 'Thank you for banking with us, your current Balance now is ' + (this.currentBalance +=  depositAmt);
		
	}


	accWithdrawal(amount) {
		if (amount < this.minimumBalance) {
			return 'Please your account balance is insufficient';
		} else {
			return 'Thank you for banking with us, your current Balance now is ' + (this.currentBalance -=  amount);
		}
		
	}

	class GTSavingsAccount extends GTBankAccount {
		constructor(holderName, accNumber, address,minimumBalance, currentBalance) {
			super(holderName, accNumber, address,minimumBalance, currentBalance);
			this._interestCapitalised = interestPerMonth;
			this.savingsAccountHolders = [];
		}

		addAccountHolders(GTBankAccount) {
			this.savingsAccountHolders.push(GTBankAccount);
		}

	}

	class GTCurrentAccount extends GTBankAccount {
		constructor (holderName, accNumber, address,minimumBalance, currentBalance) {
			super(holderName, accNumber, address,minimumBalance, currentBalance);
			this.currentAccountHolders = [];
		}

		addAccountHolders(GTBankAccount) {
			this.currentAccountHolders.push(GTBankAccount);
		}
	}