import { observable } from "./ComplexObserver.js";
import { tasks } from "./Tasks.js";

(function () {
  const { walk, talk, fly } = tasks;

  for (let counter = 1; counter < 10000000; ++counter)
    observable.subscribe(walk).subscribe(talk).subscribe(fly);

  function handler(e) {
    observable.notify("Hello There");
  }

  document.querySelector("#btn-notify").addEventListener("click", handler);
})();

export default {};
