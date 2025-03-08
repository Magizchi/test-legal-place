import { Drug, Pharmacy } from "./pharmacy";

const drugsAfterOneMonth = (array) => {
  const afterMonth = [];
  const pharmacy = new Pharmacy(array);
  for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
    afterMonth.push(pharmacy.updateBenefitValue());
  }
  return afterMonth[afterMonth.length - 1];
};
describe("Test - Herbal Tea", () => {
  it("Benefit increases once as fast before the expiration date", () => {
    expect(drugsAfterOneMonth([new Drug("Herbal Tea", 40, 10)])).toEqual([
      new Drug("Herbal Tea", 10, 40),
    ]);
  });
  it("Benefit increases twice as fast after the expiration date", () => {
    expect(drugsAfterOneMonth([new Drug("Herbal Tea", 25, 10)])).toEqual([
      new Drug("Herbal Tea", -5, 45),
    ]);
  });
  it("The Benefit of an item is never more than 50.", () => {
    expect(drugsAfterOneMonth([new Drug("Herbal Tea", 25, 20)])).toEqual([
      new Drug("Herbal Tea", -5, 50),
    ]);
  });
});
describe("Test - Fervex", () => {
  it("Benefit increases by 2 when there are 10 days or less", () => {
    expect(drugsAfterOneMonth([new Drug("Fervex", 20, 10)])).toEqual([
      new Drug("Fervex", -10, 47),
    ]);
  });
  it("The Benefit of an item is never more than 50.", () => {
    expect(drugsAfterOneMonth([new Drug("Fervex", 25, 30)])).toEqual([
      new Drug("Fervex", -5, 50),
    ]);
  });
});
describe("Test - Magic Pill", () => {
  it("never expires nor decreases in Benefit", () => {
    expect(drugsAfterOneMonth([new Drug("Magic Pill", 27, 90)])).toEqual([
      new Drug("Magic Pill", 27, 90),
    ]);
  });
});
describe("Test - Dafalgan", () => {
  it("degrades in Benefit twice as fast as normal drugs when is NOT expired", () => {
    expect(drugsAfterOneMonth([new Drug("Dafalgan", 45, 90)])).toEqual([
      new Drug("Dafalgan", 15, 30),
    ]);
  });
  it("degrades in Benefit twice as fast as normal drugs when is expired", () => {
    expect(drugsAfterOneMonth([new Drug("Dafalgan", 27, 90)])).toEqual([
      new Drug("Dafalgan", -3, 24),
    ]);
  });
  it("The Benefit of an item is never negative.", () => {
    expect(drugsAfterOneMonth([new Drug("test", 10, 0)])).toEqual([
      new Drug("test", -20, 0),
    ]);
  });
  it("The Benefit of an item is never negative.", () => {
    expect(drugsAfterOneMonth([new Drug("test", 10, 0)])).toEqual([
      new Drug("test", -20, 0),
    ]);
  });
});
describe("Test - Autre ", () => {
  it("Once the expiration date has passed, Benefit degrades twice as fast.", () => {
    expect(drugsAfterOneMonth([new Drug("test", 27, 90)])).toEqual([
      new Drug("test", -3, 57),
    ]);
  });
  it("The Benefit of an item is never negative.", () => {
    expect(drugsAfterOneMonth([new Drug("test", 10, 0)])).toEqual([
      new Drug("test", -20, 0),
    ]);
  });
});
