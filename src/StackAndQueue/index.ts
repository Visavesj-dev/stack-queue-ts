import Stack from "./stack";
// view
(() => {
  const stack = new Stack<String>();

  stack.push("A");
  stack.push("B");

  console.log(stack.size());
  stack.pop();
  console.log(stack.size());
})();
