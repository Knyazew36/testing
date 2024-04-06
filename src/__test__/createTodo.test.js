import { createTodo, createTodoOnServer } from "../createTodo";

const mockedV4 = jest.fn(() => "abcd");

jest.mock("uuid", () => ({
  v4: () => mockedV4(),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({ id: "abcd", title: "Learn Jest", completed: false }),
  })
);

describe("createTodo", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return a todo object", () => {
    const title = "Learn Jest";
    const res = createTodo(title);
    const expectedResult = { title, completed: false, id: "abcd" };

    expect(mockedV4).toHaveBeenCalledTimes(1);
    expect(res).toEqual(expectedResult);
  });

  it("should create todo on server", async () => {
    const res = await createTodoOnServer("Learn Jest");
  });
  // it("should throw an error if server request fails", async () => {
  //   fetch.mockRejectedValueOnce({ ok: false });
  //   // await expect(createTodoOnServer("Learn Jest")).rejects.toMatch(
  //   //   "network error"
  //   // );
  //   const fnToTrow = () => createTodoOnServer("my todo");
  //   expect(fnToTrow).rejects.toThrow("Cannot create todo");
  // });
});
