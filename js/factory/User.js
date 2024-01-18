function userFactory(name) {
  return {
    name,
    say() {
      console.log(this.name);
    },
  };
}

const me = userFactory("Me");
const you = userFactory("You");

console.log(me.say === you.say);

console.log("*".repeat(20));

class UserClass {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(this.name);
  }
}

const reem = new UserClass("Reem");
const omar = new UserClass("Omar");

console.log(reem.say === omar.say);

console.log("*".repeat(20));

UserClass.prototype.print = function () {
  console.log("Hello, World");
  console.log(this.name);
};

console.log(reem.print === omar.print);

export default {};
