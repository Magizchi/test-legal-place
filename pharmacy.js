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
        case "Fervex":
        case "Doliprane":
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

      //   if (
      //     this.drugs[i].name != "Herbal Tea" &&
      //     this.drugs[i].name != "Fervex"
      //   ) {
      //     if (this.drugs[i].benefit > 0) {
      //       if (this.drugs[i].name != "Magic Pill") {
      //         this.drugs[i].benefit = this.drugs[i].benefit - 1;
      //       }
      //     }
      //   } else {
      //     if (this.drugs[i].benefit < 50) {
      //       this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //       if (this.drugs[i].name == "Fervex") {
      //         if (this.drugs[i].expiresIn < 11) {
      //           if (this.drugs[i].benefit < 50) {
      //             this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //           }
      //         }
      //         if (this.drugs[i].expiresIn < 6) {
      //           if (this.drugs[i].benefit < 50) {
      //             this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //           }
      //         }
      //       }
      //     }
      //   }
      //   if (this.drugs[i].name != "Magic Pill") {
      //     this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      //   }
      //   if (this.drugs[i].expiresIn < 0) {
      //     if (this.drugs[i].name != "Herbal Tea") {
      //       if (this.drugs[i].name != "Fervex") {
      //         if (this.drugs[i].benefit > 0) {
      //           if (this.drugs[i].name != "Magic Pill") {
      //             this.drugs[i].benefit = this.drugs[i].benefit - 1;
      //           }
      //         }
      //       } else {
      //         this.drugs[i].benefit =
      //           this.drugs[i].benefit - this.drugs[i].benefit;
      //       }
      //     } else {
      //       if (this.drugs[i].benefit < 50) {
      //         this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //       }
      //     }
      //   }
    }

    return this.drugs;
  }
}
