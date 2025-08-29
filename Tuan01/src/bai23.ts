interface Payment { pay(amount: number): void; }
export class CashPayment implements Payment {
  pay(amount: number) { console.log("Paid cash:", amount); }
}
export class CardPayment implements Payment {
  pay(amount: number) { console.log("Paid by card:", amount); }
}

