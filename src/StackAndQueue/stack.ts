// Interface Segregation principle
interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  size(): number;
}

export default class Stack<T> implements IStack<T> {
  private data: T[] = [];

  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Stack was full");
    }
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.pop();
  }

  size(): number {
    return this.data.length;
  }
}
