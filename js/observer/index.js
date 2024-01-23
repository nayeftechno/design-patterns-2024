import observable from "./Observable.js";

(() => {
  function eat(data) {
    console.log(`${data} Eat`);
  }
  function walk(data) {
    console.log(`${data} Walk`);
  }
  function speak(data) {
    console.log(`${data} Speak`);
  }

  observable.subscribe(eat);
  observable.subscribe(walk);
  observable.subscribe(speak);

  document.getElementById("btn-notify").addEventListener("click", function (_) {
    observable.notify("HELLO");
  });
})();
