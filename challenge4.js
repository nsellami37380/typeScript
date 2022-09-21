"use strict";
exports.__esModule = true;
var assert = require("assert");
var BankCustomer = /** @class */ (function () {
    function BankCustomer(name, secretCode) {
        this.name = name;
        this.secretCode = secretCode;
    }
    BankCustomer.prototype.getName = function () {
        return this.name;
    };
    BankCustomer.prototype.verifyPinInput = function (secretCode) {
        return this.secretCode === secretCode;
    };
    return BankCustomer;
}());
// Tests
var customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
