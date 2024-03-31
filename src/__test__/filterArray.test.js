import {
  basketWithNoQuantity,
  filteredBasketWithQuantityOnly,
} from "../__mock__/basket.mock";
import { filterArray } from "../filterArray";

const cb = jest.fn();
const logSpy = jest.spyOn(console, "log");

describe("filterArray", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should not invoke callback when an array is empty", () => {
    filterArray([], cb);
    expect(cb).not.toHaveBeenCalled();
    expect(logSpy).not.toHaveBeenCalled();
  });

  it("should invoke provided function as many time as the length of an array", () => {
    const arr = [1, 2, 3];
    filterArray(arr, cb);
    expect(cb).toHaveBeenCalledTimes(arr.length);
  });

  it("should return filtered arr", () => {
    const hasQuantity = (order) => order.qty > 0;
    const res = filterArray(basketWithNoQuantity, hasQuantity);
    expect(res).toEqual(filteredBasketWithQuantityOnly);
    expect(logSpy).toHaveBeenCalledTimes(basketWithNoQuantity.length);
  });

  it("should return an empty array when no elements match the callback condition", () => {
    const arr = [0, 0, 0];
    const callback = (element) => element > 0;
    const res = filterArray(arr, callback);
    expect(res).toEqual([]);
  });

  it("should return the original array when all elements match the callback condition", () => {
    const arr = [1, 2, 3];
    const callback = (element) => element > 0;
    const res = filterArray(arr, callback);
    expect(res).toEqual(arr);
  });
});
