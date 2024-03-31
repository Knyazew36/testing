import { len, toLowerCase, toUpperCase } from "../strings";

describe("strings", () => {
  describe("toUpperCase", () => {
    it("should convert string to upper case", () => {
      const res = toUpperCase("hello");
      expect(res).toBe("HELLO");
    });
  });

  describe("toLowerCase", () => {
    it.each([
      {
        string: "HELLO",
        expected: "hello",
      },
    ])("should convert $string to $expected", ({ string, expected }) => {
      const res = toLowerCase(string);
      expect(res).toBe(expected);
    });
  });

  describe("len", () => {
    it("should return length of string", () => {
      const res = len("hello");
      expect(res).toBe(5);
    });
  });
});
