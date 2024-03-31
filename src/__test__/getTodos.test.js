import axios from "axios";
import { getTodos } from "../getTodos";

const axiosSpy = jest.spyOn(axios, "get");
const errorSpy = jest.spyOn(console, "error");

describe("getTodos", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call axios.get", async () => {
    const res = await getTodos();
    expect(axiosSpy).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/todos"
    );
    expect(res).toEqual([]);
    expect(res).toHaveLength(0);
  });

  it("should return an empty array when an error occurs", async () => {
    axiosSpy.mockRejectedValueOnce("error");
    const res = await getTodos();
    expect(res).toEqual([]);
    expect(errorSpy).toHaveBeenCalledWith("error");
  });
});
