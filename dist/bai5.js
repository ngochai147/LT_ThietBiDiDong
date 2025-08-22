"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(money) {
        this.balance += money;
        return this.balance;
    }
    withdraw(money) {
        this.balance -= money;
        return this.balance;
    }
}
exports.BankAccount = BankAccount;
