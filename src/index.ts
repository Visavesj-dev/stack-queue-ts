import MainView from "./main.view";
// view
(() => {
  const main = new MainView();

  main.execute("Stack push", "1");
  main.execute("Stack push", 2);
  main.execute("Stack pop", undefined);

  main.execute("Queue enqueue", "A");
  main.execute("Queue enqueue", 2);
  main.execute("Queue dequeue", undefined);
})();
