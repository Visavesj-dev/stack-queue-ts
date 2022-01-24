// Interface Segregation principle
export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  size(): number;
}

export default class Queue<T> implements IQueue<T> {
  private data: T[] = [];

  constructor(private capacity: number = Infinity) {}

  enqueue(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Queue was Full");
    }
    this.data.push(item);
  }

  dequeue(): T | undefined {
    return this.data.shift();
  }

  size(): number {
    return this.data.length;
  }
}
