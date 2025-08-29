"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardPayment = exports.CashPayment = void 0;
class CashPayment {
    pay(amount) { console.log("Paid cash:", amount); }
}
exports.CashPayment = CashPayment;
class CardPayment {
    pay(amount) { console.log("Paid by card:", amount); }
}
exports.CardPayment = CardPayment;
