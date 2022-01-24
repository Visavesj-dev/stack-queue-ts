import { MainViewInterface } from "./main.view";
import { StackInterface } from "./main.stack.model";
import { QueueInterface } from "./main.queue.model";

export default class MainController<T> {
  view: MainViewInterface<T>;
  stack: StackInterface<T>;
  queue: QueueInterface<T>;

  private capacity: number = 1;

  constructor(
    view: MainViewInterface<T>,
    stack: StackInterface<T>,
    queue: QueueInterface<T>
  ) {
    this.view = view;
    this.stack = stack;
    this.queue = queue;
  }

  stackOrQueue = (operator: string, item: T) => {
    switch (operator) {
      case "Stack push":
        if (this.stack.size() === this.capacity) {
          return this.view.setErrorMessage("Stack Full");
        }
        this.stack.push(item);
        this.view.setResult(this.stack.size());
        break;

      case "Stack pop":
        this.stack.pop();
        this.view.setResult(this.stack.size());
        break;

      case "Queue enqueue":
        this.queue.enqueue(item);
        this.view.setResult(this.queue.size());
        break;

      case "Queue dequeue":
        console.log(this.queue.dequeue());
        this.view.setResult(this.queue.size());
        break;

      default:
        break;
    }
  };
}
