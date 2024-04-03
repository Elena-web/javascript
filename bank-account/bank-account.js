// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor(name, balance = 0) {
    this.name = name;
    this.Balance = balance;
    this.IsOpen = false;
  }

  open() {
    if (this.IsOpen) {
      throw new ValueError();
    }
    this.IsOpen = true;
    this.Balance = 0;
  }

  close() {
    if (this.IsOpen === false) {
      throw new ValueError();
    }
    this.Balance = 0;
    this.IsOpen = false;
  }

  deposit(num) {
    if (this.IsOpen === false) {
      throw new ValueError();
    }
    if (this.IsOpen) {
      if (num >= 0) {
        this.Balance += num;
      } else {
        throw new ValueError();
      }
    }
  }

  withdraw(num) {
    if (this.IsOpen === false || num < 0 || this.Balance < num) {
      throw new ValueError();
    }
    this.Balance -= num;
  }

  get balance() {
    if (this.IsOpen === false) {
      throw new ValueError();
    }
    return this.Balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
    this.name = 'ValueError';
  }
}
