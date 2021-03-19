// Bank
var Bank = {
    name: 'Bofa',
    address: '201 brookfield',
    userList: {},
    userNameList: [],
    transactionList: ''
};

// Create Account
Bank.createAccount = function(userName, name) {
    Bank.userList[userName] = {
        name: name,
        balance: 0
    };
    Bank.userNameList.push(userName);
    console.log("Account Created for");
    console.log(Bank.userList);
}

//Add balance

Bank.addBalance = function(username, Amount) {
    Amount = parseInt(Amount);
    let currentBalance = Bank.userList[username].balance;
    currentBalance = parseInt(currentBalance);
    let newBalance = currentBalance + Amount;

    Bank.userList[username].balance = newBalance;
    Bank.addTransactions(username, Amount, newBalance);

}

// Add Tranction
Bank.addTransactions = function(username, Amount, balance) {
    let transaction = username + "  " + Amount + "  " + balance + "\n";
    Bank.transactionList = transaction + Bank.transactionList;
}

Bank.getUserList = function() {
    return Object.entries(Bank.userList).map(function(each) {
        let data = {};
        data = each[1];
        data.username = each[0];
        return data;
    });
}