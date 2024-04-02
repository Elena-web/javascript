//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  get bearing() {
    return this.bear || 'north';
  }

  get coordinates() {
    return this.coords || [0, 0];
  }

  place({ x, y, direction }) {
    this.coords = [x, y];
    this.bear = direction;
    if (direction === 'crood') {
      throw new InvalidInputError('Invalid coordinates');
    }
  }

  evaluate(instructions) {
    for (let i = 0; i < instructions.length; i += 1) {
      const instruction = instructions[i];
      if (instruction === 'R') {
        this.turnRight();
      } else if (instruction === 'L') {
        this.turnLeft();
      } else if (instruction === 'A') {
        this.advance();
      }
    }
  }

  turnRight() {
    if (this.bear === 'north') {
      this.bear = 'east';
    } else if (this.bear === 'east') {
      this.bear = 'south';
    } else if (this.bear === 'south') {
      this.bear = 'west';
    } else if (this.bear === 'west') {
      this.bear = 'north';
    }
  }

  turnLeft() {
    if (this.bear === 'north') {
      this.bear = 'west';
    } else if (this.bear === 'west') {
      this.bear = 'south';
    } else if (this.bear === 'south') {
      this.bear = 'east';
    } else if (this.bear === 'east') {
      this.bear = 'north';
    }
  }

  advance() {
    if (this.bear === 'east') {
      this.coords[0] += 1;
    }
    if (this.bear === 'west') {
      this.coords[0] -= 1;
    }
    if (this.bear === 'north') {
      this.coords[1] += 1;
    }
    if (this.bear === 'south') {
      this.coords[1] -= 1;
    }
  }
}
