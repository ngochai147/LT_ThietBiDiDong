export class BankAccount{
    balance:number

    constructor(balance:number){
        this.balance=balance
    }


    deposit(money:number){
        this.balance+= money
        return this.balance;
    }

    withdraw(money:number){
        this.balance-= money
        return this.balance;
    }
}