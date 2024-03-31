import { multiply, divide, sum } from "../math";

describe("math", () => {
  describe("divide", () => {
    // it.skip("should divide positive numbers", () => { //Пропускаем какой-то тест
    it.each([
      { inputA: 6, inputB: 3, expected: 2 },
      { inputA: 10, inputB: 0, expected: Infinity },
    ])(
      "should $input a divide $input b equals $expected",
      ({ inputA, expected, inputB }) => {
        const result = divide(inputA, inputB);
        expect(result).toBe(expected);
      }
    );
    // it("should divide positive numbers", () => {
    //   const expectedResult = 2;
    //   const result = divide(4, 2);
    //   expect(result).toBe(expectedResult);
    // });

    // if (
    //   ("should return Infinity when dividing by 0",
    //   () => {
    //     const expectedResult = Infinity;
    //     const result = divide(4, 0);
    //     expect(result).toBe(expectedResult);
    //   })
    // );
  });
  describe("multiply", () => {
    const expectedResult = 6;
    it("should multiply positive numbers", () => {
      const res = multiply(3, 2);
      expect(res).toBe(expectedResult);
    });

    it("should multiply negative numbers", () => {
      const res = multiply(-3, -2);
      expect(res).toBe(expectedResult);
    });

    it("should multiply negative and positive numbers", () => {
      const res = multiply(3, -2);
      expect(res).toBe(-6);
    });
  });
  describe("sum", () => {
    it("should sum positive numbers", () => {
      const expectedResult = 5;
      const result = sum(2, 3);
      expect(result).toBe(expectedResult);
    });
    it("should sum negative numbers", () => {
      const expectedResult = -1;
      const result = sum(-2, 1);
      expect(result).toBe(expectedResult);
    });
  });
});
