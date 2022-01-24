import Queue from "../queue";

describe("queue with string", () => {
  let queue: Queue<string> | null;

  beforeAll(() => {
    queue = new Queue();
  });

  afterAll(() => {
    queue = null;
  });

  test("enqueue 1 in stack", () => {
    // AAA
    queue?.enqueue("1");
    expect(queue?.size()).toBe(1);
  });

  test("dequeue 1 in stack", () => {
    // AAA
    queue?.dequeue();
    expect(queue?.size()).toBe(0);
  });
});
