// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  static usedNames = [];

  constructor() {
    this.robotName = this.generateName();
  }

  get name() {
    return this.robotName;
  }

  static generateRandomName() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let name = '';
    for (let i = 0; i < 2; i += 1) {
      name += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 3; i += 1) {
      name += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return name;
  }

  generateName() {
    const robotName = Robot.generateRandomName();
    if (Robot.usedNames.includes(robotName)) {
      return this.generateName();
    }
    Robot.usedNames.push(robotName);
    return robotName;
  }

  reset() {
    Robot.usedNames.push(this.robotName);
    this.robotName = this.generateName();
  }

  static releaseNames() {
    Robot.usedNames = [];
  }
}
