import MainController from "./main.controller";
import Stack from "./main.stack.model";
import Queue from "./main.queue.model";

// Interface Segregation principle
export interface MainViewInterface<T> {
  setErrorMessage: (message: string) => void;
  setResult: (result: number) => void;
}

export default class MainView<T> implements MainViewInterface<T> {
  controller: MainController<T>;

  constructor() {
    this.controller = new MainController(this, new Stack(), new Queue());
  }

  setErrorMessage = (message: string) => {
    console.log(message);
  };

  setResult = (result: number) => {
    console.log(result);
  };

  execute = (operator: string, items: T) => {
    this.controller.stackOrQueue(operator, items);
  };
}
