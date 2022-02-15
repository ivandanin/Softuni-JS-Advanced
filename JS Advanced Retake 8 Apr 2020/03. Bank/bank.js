class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
        this.transactions = [];
    }

    newCustomer({firstName, lastName, personalId}) {

        let customer = this.allCustomers.find(customer => {
            return customer.firstName === firstName ||
        customer.lastName === lastName});

        if (customer) {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }
        this.allCustomers.push({firstName, lastName, personalId});
        return {firstName, lastName, personalId};
    }

    depositMoney(personalId, amount) {
        
        let customer = this.allCustomers.find(customer => customer.personalId === personalId);
        if (!customer) {
            throw new Error('We have no customer with this ID!');
        } 

        customer.totalMoney == undefined
        ? customer.totalMoney = amount
        : customer.totalMoney += amount;

        this.transactions
        .push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!\n`);
            
        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {

        let customer = this.allCustomers.find(customer => customer.personalId === personalId);
        if(!customer) {
            throw new Error('We have no customer with this ID!');
        }

        if (customer.totalMoney < amount) {
            return `${firstName} ${lastName} does not have enough money to withdraw that amount!`;
        } 
        customer.totalMoney -= amount;

        this.transactions
        .push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!\n`)

        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {

        let customer = this.allCustomers.find(c => {return c.personalId === personalId});
        if (!customer) {
            throw new Error('We have no customer with this ID!');
        } 
        let result = `Bank name: ${this.bankName}\nCustomer name: ${customer.firstName} ${customer.lastName}\nCustomer ID: ${customer.personalId}\nTotal Money: ${customer.totalMoney}$\nTransactions:\n`;
        
        let reversed = this.transactions.reverse()
        .filter(c => {return c.includes(customer.firstName)});

        let count = reversed.length;
        
        reversed.forEach(t => result += (count--) + '. ' + t);

        return result.trim();
    }
}
let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
