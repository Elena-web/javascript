// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
 
  constructor(name, balance = 0) {    
    this.name = name;
    this._balance = balance;
    this._isOpen = false;
  }

  open() {
    if(this._isOpen) {
      throw new ValueError();
    }
    this._isOpen = true;
    this._balance = 0;
  }

  close() {
    if(this._isOpen == false) {
      throw new ValueError();
    }
    this._balance = 0;
    this._isOpen = false;
  }

  deposit(num) {
    if(this._isOpen == false) {
      throw new ValueError();
    }
    
    if (this._isOpen) {
      if(num >= 0) {
      this._balance += num;
    } else {
      throw new ValueError();
    }
  }
}

withdraw(num) {
  if(this._isOpen == false || num < 0 || this._balance < num) {
    throw new ValueError();
  }
  this._balance -= num;
}

  get balance() {
    if(this._isOpen == false) {
      throw new ValueError();
    }
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
      super('Bank account error');
      this.name = 'ValueError';
  }
}
