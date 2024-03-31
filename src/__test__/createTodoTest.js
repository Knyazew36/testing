import { createTodo, createTodoOnServer } from "../createTodo";

jest.mock("uuid", () => ({ v4: () => "abcd" }));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ id: 1, title: "Todo 1", completed: false }),
  })
);

describe("createTodo", () => {
  it("should return a todo object", () => {
    const title = "test";
    const expectedRes = { title, completed: false, id: "abcd" };
    const res = createTodo(title);
    expect(res).toEqual(expectedRes);
  });

  it("should create todo on server", async () => {
    const result = await createTodoOnServer("test");

    expect(result).toEqual({ id: 1, title: "Todo 1", completed: false });
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
