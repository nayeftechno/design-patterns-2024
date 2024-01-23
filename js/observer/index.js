import { observable } from "./Observable.js";

(function () {
  function walk(data) {
    console.log(`${data} Walk...`);
  }
  function talk(data) {
    console.log(`${data} Talk...`);
  }
  function swim(data) {
    console.log(`${data} Swim...`);
  }

  observable.subscribe(walk).subscribe(talk).subscribe(swim);

  function handleClick(e) {
    observable.notify("Hi 🌴 🌴 🌴");
  }

  document.querySelector("#btn-notify").addEventListener("click", handleClick);
})();
