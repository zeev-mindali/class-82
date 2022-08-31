/*
    bank hapolaim needs to create account system
    accounts types: regular bussniess student
    fields: account number (by account counter)
            balance
            owner id
            commision
    methods: deposit
             withdraw
             getLoan()-> bussniess
             print account info
*/

interface AccountAble {
  balance: number;
  ownerId: string;
  commission: number;
  accountNumber: number;
  loan: number;
  deposit: (amount: number) => void;
  withdraw: (amount: number) => boolean;
  setCommision: (rate: number) => void;
}

abstract class Account implements AccountAble {
  balance: number;
  ownerId: string;
  commission: number;
  accountNumber: number;
  loan: number;
  private static accountRunner: number = 0;
  private static bankProfit: number = 0;

  constructor(ownerId: string, commission: number) {
    this.balance = 0;
    this.loan = 0;
    this.ownerId = ownerId;
    this.commission = commission;
    Account.accountRunner += 1;
    this.accountNumber = Account.accountRunner;
  }

  public deposit(amount: number): void {
    this.balance += amount - (this.commission / 100) * amount;
    Account.bankProfit += (this.commission / 100) * amount;
  }

  public withdraw(amount: number): boolean {
    this.balance -= amount + (this.commission / 100) * amount;
    Account.bankProfit += (this.commission / 100) * amount;
    return true;
  }

  //override toString
  public toString() {
    return `
     account number: ${this.accountNumber}
     owner id: ${this.ownerId} 
     balance: ${this.balance}
     `;
  }

  public static getBankProfit(): string {
    return `Bank profit: ${Account.bankProfit}`;
  }

  public setCommision(rate: number): void {
    this.commission = rate;
  }

  public abstract getLoan(amount: number): void;
}

//regular bussniess student
class Regular extends Account {
  constructor(ownerId: string) {
    super(ownerId, 10);
  }
  public getLoan(amount: number): void {
    console.log("you can't get a loan");
  }
}
class Bussniess extends Account {
  private bussniessType: string;

  constructor(ownerId: string, bussniessType: string) {
    super(ownerId, 2);
    this.bussniessType = bussniessType;
  }

  public getLoan(amount: number): void {
    this.loan += amount;
  }

  //override method
  public toString(): string {
    let myInfo = super.toString();
    myInfo += `
    account type ${this.bussniessType}
    `;
    return myInfo;
  }
}
class Student extends Account {
  constructor(ownerId: string) {
    super(ownerId, 0);
  }
  public getLoan(amount: number): void {
    console.log("you can't get a loan");
  }

  public toString(): string {
    return `the owner isssssss : ${this.ownerId}`;
  }
}

let account1: Regular = new Regular("zeev");

//let amit: Account = new Account("satlan", 5); => account is abstract....
let noa: Bussniess = new Bussniess("noa", "developer");
noa.deposit(1000000);
console.log(Account.getBankProfit());
console.log(noa.toString());

let matan: Student = new Student("Matan");

console.log(matan.toString());
