export interface QueueInterface<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  size(): number;
}

export default class Queue<T> implements QueueInterface<T> {
  private data: T[] = [];

  enqueue(item: T): void {
    this.data.push(item);
  }

  dequeue(): T | undefined {
    return this.data.shift();
  }

  size(): number {
    return this.data.length;
  }
}
