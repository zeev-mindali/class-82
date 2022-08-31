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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(ownerId, commission) {
        this.balance = 0;
        this.loan = 0;
        this.ownerId = ownerId;
        this.commission = commission;
        Account.accountRunner += 1;
        this.accountNumber = Account.accountRunner;
    }
    Account.prototype.deposit = function (amount) {
        this.balance += amount - (this.commission / 100) * amount;
        Account.bankProfit += (this.commission / 100) * amount;
    };
    Account.prototype.withdraw = function (amount) {
        this.balance -= amount + (this.commission / 100) * amount;
        Account.bankProfit += (this.commission / 100) * amount;
        return true;
    };
    //override toString
    Account.prototype.toString = function () {
        return "\n     account number: ".concat(this.accountNumber, "\n     owner id: ").concat(this.ownerId, " \n     balance: ").concat(this.balance, "\n     ");
    };
    Account.getBankProfit = function () {
        return "Bank profit: ".concat(Account.bankProfit);
    };
    Account.prototype.setCommision = function (rate) {
        this.commission = rate;
    };
    Account.accountRunner = 0;
    Account.bankProfit = 0;
    return Account;
}());
//regular bussniess student
var Regular = /** @class */ (function (_super) {
    __extends(Regular, _super);
    function Regular(ownerId) {
        return _super.call(this, ownerId, 10) || this;
    }
    Regular.prototype.getLoan = function (amount) {
        console.log("you can't get a loan");
    };
    return Regular;
}(Account));
var Bussniess = /** @class */ (function (_super) {
    __extends(Bussniess, _super);
    function Bussniess(ownerId, bussniessType) {
        var _this = _super.call(this, ownerId, 2) || this;
        _this.bussniessType = bussniessType;
        return _this;
    }
    Bussniess.prototype.getLoan = function (amount) {
        this.loan += amount;
    };
    //override method
    Bussniess.prototype.toString = function () {
        var myInfo = _super.prototype.toString.call(this);
        myInfo += "\n    account type ".concat(this.bussniessType, "\n    ");
        return myInfo;
    };
    return Bussniess;
}(Account));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(ownerId) {
        return _super.call(this, ownerId, 0) || this;
    }
    Student.prototype.getLoan = function (amount) {
        console.log("you can't get a loan");
    };
    Student.prototype.toString = function () {
        return "the owner isssssss : ".concat(this.ownerId);
    };
    return Student;
}(Account));
var account1 = new Regular("zeev");
//let amit: Account = new Account("satlan", 5); => account is abstract....
var noa = new Bussniess("noa", "developer");
noa.deposit(1000000);
console.log(Account.getBankProfit());
console.log(noa.toString());
var matan = new Student("Matan");
console.log(matan.toString());
