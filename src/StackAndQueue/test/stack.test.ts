import Stack from "../stack";

describe("stack with string", () => {
  let stack: Stack<string> | null;

  beforeAll(() => {
    stack = new Stack();
  });

  afterAll(() => {
    stack = null;
  });

  test("Push 1 in stack", () => {
    // AAA
    stack?.push("1");
    expect(stack?.size()).toBe(1);
  });

  test("Pop 1 in stack", () => {
    // AAA
    stack?.pop();
    expect(stack?.size()).toBe(0);
  });
});
