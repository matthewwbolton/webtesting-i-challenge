const enhancer = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe("succeed()", () => {
    it("increases enhancement by 1 if enhancement is less than 20", () => {
      const item = { name: "iron sword", enhancement: 15, durability: 80 };
      const successItem = enhancer.succeed(item);
      expect(successItem.enhancement).toEqual(16);
    });
    it("if enhancement is equal to 20 then enhancement is uncahnged", () => {
      const item = { name: "iron sword", enhancement: 20, durability: 80 };
      const successItem = enhancer.succeed(item);

      expect(successItem.enhancement).toEqual(20);
    });
  });
});

describe("enhancer.js", () => {
  describe("fail()", () => {
    it("if enhancement is 0 return the item unchanged", () => {
      const item = { name: "iron sword", enhancement: 0, durability: 50 };
      const failedItem = enhancer.fail(item);

      expect(failedItem.enhancement).toEqual(0);
      expect(failedItem.name).toBe("iron sword");
      expect(failedItem.durability).toEqual(50);
    });
    it("if enhancement is less than 15 then decrease the durability by 5", () => {
      const item = { name: "iron sword", enhancement: 10, durability: 50 };
      const failedItem = enhancer.fail(item);

      expect(failedItem.durability).toEqual(45);
    });
    it("if enhancement is greater than or equal to 15 the durability is decreased by 10", () => {
      const item = { name: "iron sword", enhancement: 15, durability: 50 };
      const failedItem = enhancer.fail(item);

      expect(failedItem.durability).toEqual(40);
    });
    it("if the enhancement is greater than 16 the enhancement level decreases by 1", () => {
      const item = { name: "iron sword", enhancement: 17, durability: 50 };
      const failedItem = enhancer.fail(item);

      expect(failedItem.enhancement).toEqual(16);
    });
  });
});

describe("enhancer.js", () => {
  describe("repair()", () => {
    it("resets the durability of the item object to 100", () => {
      const item = { name: "iron sword", enhancement: 10, durability: 50 };
      const repairedItem = enhancer.repair(item);

      expect(repairedItem.durability).toEqual(100);
    });

    it("leaves the vlaue for enhancement unchanged", () => {
      const item = { name: "iron sword", enhancement: 10, durability: 50 };
      const repairedItem = enhancer.repair(item);
      expect(repairedItem.enhancement).toEqual(10);
    });
    it("leaves the value of name unchanged", () => {
      const item = { name: "iron sword", enhancement: 10, durability: 50 };
      const repairedItem = enhancer.repair(item);

      expect(repairedItem.name).toEqual("iron sword");
    });
  });
});

describe("enhancer.js", () => {
  describe("get()", () => {});
});
