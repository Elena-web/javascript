//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(score) {
    this.score = score;
    this.allergens = {
      eggs: 1,
      peanuts: 2,
      shellfish: 4,
      strawberries: 8,
      tomatoes: 16,
      chocolate: 32,
      pollen: 64,
      cats: 128,
    };
    this.allergies = this.getAllergies();
  }

  getAllergies() {
    return Object.keys(this.allergens).filter((allergen) => this.isAllergicTo(allergen));
  }

  isAllergicTo(allergen) {
    const allergenScore = this.allergens[allergen];
    return (this.score / allergenScore) % 2 >= 1;
  }

  list() {
    return this.allergies;
  }

  allergicTo(product) {
    return this.allergies.includes(product);
  }
}
