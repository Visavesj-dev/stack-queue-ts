// Interface Segregation principle
export interface StackInterface<T> {
  push(item: T): void;
  pop(): T | undefined;
  size(): number;
  inStorage(): void;
}

export default class Stack<T> implements StackInterface<T> {
  private storage: T[] = [];

  push(item: T): void {
    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  size(): number {
    return this.storage.length;
  }

  inStorage(): T[] {
    return this.storage;
  }
}
