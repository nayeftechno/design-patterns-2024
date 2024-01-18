document.querySelector("#btn-add").addEventListener("click", () => {
  import("./Basics.js").then(({ add }) => {
    console.log(add(1, 2, 3));
  });
});

document.querySelector("#btn-multiply").addEventListener("click", () => {
  import("./Basics.js").then(({ multiply }) => {
    console.log(multiply(2, 3, 2));
  });
});

export default {};
