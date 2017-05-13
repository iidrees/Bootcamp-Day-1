class GTBankAccount {// Create the super class Bank Account 

	constructor(holderName, accNumber, address,minimumBalance, currentBalance) { // Initialise the properties 
		this._holderName = holderName; 
		this._accNumber = accNumber;
		this._address = address;
		this._minimumBalance = minimumBalance;
		this._currentBalance = currentBalance;
		
	}
    get fullAccountDetails() {//The full account detail for each acccount holder method
	    let details = {// an object to hold the account detail
	    	name: this._holderName,
	    	accNumber: this._accNumber,
	    	address: this._address,
	    	minBal: this._minimumBalance,
	    	currBal: this._currentBalance
	     };
	     return details; // return the details when this method is called 
	}
    get minBalanceDetails() {// a return minimum balance method 
        return this._currentBalance;//returns the minimum balance of an account holder
    }
    accDeposit(depositAmt) {//a account deposit method, returns the updated value of the account when a deposit has been made
        return 'Thank you for banking with us, your current Balance now is ' + (this._currentBalance +=  depositAmt);
	}
    accWithdrawal(amount) {// a account withdrawal method
		if (amount > this._currentBalance) {// checks if the withdrawal request is greater than the current balance and stops transaction if true
			return 'Please your account balance is insufficient';
		} else {// else it effects withdrawal and then updates the current value of the account
			return 'Thank you for banking with us, your current Balance now is ' + (this._currentBalance -=  amount);
		}
	}
}

class GTSavingsAccount extends GTBankAccount {//A savings account. A child class of the GT bank class
	constructor(holderName, accNumber, address,minimumBalance, currentBalance) {// inherits from the super class
		super(holderName, accNumber, address,minimumBalance, currentBalance);	
	}
	addAccountHolders(GTBankAccount) {// has its own method of account holders records showing only individuals who hold savings account
	    let savingsAccountHolders = [];
		savingsAccountHolders.push(GTBankAccount);
		return savingsAccountHolders;
	}
}

class GTCurrentAccount extends GTBankAccount {//A savings account. A child class of the GT bank class

	constructor (holderName, accNumber, address,minimumBalance, currentBalance) {
		super(holderName, accNumber, address,minimumBalance, currentBalance);	
	}
	addAccountHolders(GTBankAccount) {
	    let currentAccountHolders = [];
	    this.currentAccountHolders.push(GTBankAccount);
	}
}