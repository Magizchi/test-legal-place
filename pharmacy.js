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
      switch (true) {
        case this.drugs[i].name === "Herbal Tea":
          this.drugs[i].expiresIn -= 1;
          if (this.drugs[i].expiresIn < 0) {
            // Benefit degrades twice as fast.
            this.drugs[i].benefit += 2;
            // The Benefit of an item is never negative.
            if (this.drugs[i].benefit > 50) {
              this.drugs[i].benefit = 50;
              break;
            }
          } else {
            this.drugs[i].benefit += 1;
          }
          break;
        case this.drugs[i].name === "Fervex":
          this.drugs[i].expiresIn -= 1;
          if (this.drugs[i].expiresIn > 0) {
            if (this.drugs[i].expiresIn <= 10 && this.drugs[i].expiresIn > 5) {
              this.drugs[i].benefit += 2;
            }
            if (this.drugs[i].expiresIn <= 5) {
              this.drugs[i].benefit += 3;
            }
          }
          if (this.drugs[i].benefit > 50) {
            this.drugs[i].benefit = 50;
            break;
          }

          break;
        case this.drugs[i].name === "Dafalgan":
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
        case this.drugs[i].name === "Magic Pill":
          break;
        default:
          this.drugs[i].expiresIn -= 1;
          if (this.drugs[i].expiresIn < 0) {
            // Benefit degrades twice as fast.
            this.drugs[i].benefit -= 2;
            // The Benefit of an item is never negative.
            if (this.drugs[i].benefit < 0) {
              this.drugs[i].benefit = 0;
              break;
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
