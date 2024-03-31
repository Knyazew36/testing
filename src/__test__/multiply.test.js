import { multiply } from "../math.js";

//TODO: не удалять
// describe("multiply", () => {
//   const expectedResult = 6;
//   it("should multiply positive numbers", () => {
//     const res = multiply(3, 2);
//     expect(res).toBe(expectedResult);
//     expect({ a: 1 }).toEqual({ a: 1 }); //объект
//     expect([1, 2, 3]).toHaveLength(3); //массив
//     expect([1, 2, 3]).toContain(3); //есть ли в массиве это число
//     expect([1, 2, 3]).not.toContain(13); //чего то нет в массиве
//     // yarn add --dev @types/jest типы
//     expect(undefined).toBeUndefined();
//     expect(null).toBeNull();
//     expect(expectedResult).toBeDefined(); //определена ли
//   });

//   it("should multiply negative numbers", () => {
//     const res = multiply(-3, -2);
//     expect(res).toBe(expectedResult);
//   });

it("should multiply negative and positive numbers", () => {
  const res = multiply(3, -2);
  expect(res).toBe(-6);
});
// });
