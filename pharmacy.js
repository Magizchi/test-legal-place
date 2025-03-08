export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      switch (this.drugs[i].name) {
        case "Herbal Tea":
          this.drugs[i].expiresIn -= 1;
          if (this.drugs[i].expiresIn >= 0) {
            this.drugs[i].benefit += 1;
          } else {
            // Benefit increases twice as fast after the expiration date
            this.drugs[i].benefit += 2;
          }
          if (this.drugs[i].benefit > 50) {
            this.drugs[i].benefit = 50;
          }
          break;
        case "Fervex":
          this.drugs[i].expiresIn -= 1;
          if (this.drugs[i].expiresIn >= 0) {
            if (this.drugs[i].expiresIn > 10) {
              this.drugs[i].benefit += 1;
            }
            // Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less
            if (this.drugs[i].expiresIn <= 10 && this.drugs[i].expiresIn > 5) {
              this.drugs[i].benefit += 2;
            }
            if (this.drugs[i].expiresIn <= 5) {
              this.drugs[i].benefit += 3;
            }
          }
          // The Benefit of an item is never more than 50
          if (this.drugs[i].benefit > 50) {
            this.drugs[i].benefit = 50;
          }

          break;
        case "Dafalgan":
          this.drugs[i].expiresIn -= 1;
          if (this.drugs[i].expiresIn < 0) {
            // Benefit degrades twice as fast.
            this.drugs[i].benefit -= 4;
            // The Benefit of an item is never negative.
            if (this.drugs[i].benefit < 0) {
              this.drugs[i].benefit = 0;
              break;
            }
          } else {
            this.drugs[i].benefit -= 2;
          }
          break;
        // "Magic Pill" never expires nor decreases in Benefit
        case "Magic Pill":
          break;
        default:
          this.drugs[i].expiresIn -= 1;
          if (this.drugs[i].expiresIn < 0) {
            // Benefit degrades twice as fast.
            this.drugs[i].benefit -= 2;
            // The Benefit of an item is never negative.
            if (this.drugs[i].benefit < 0) {
              this.drugs[i].benefit = 0;
            }
          } else {
            this.drugs[i].benefit -= 1;
          }
          break;
      }
    }

    return this.drugs;
  }
}
