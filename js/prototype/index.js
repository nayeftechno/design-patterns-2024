function User(name) {
  this.name = name;
}
User.prototype.walk = function () {
  console.log(`${this.name} can walk`);
};
User.prototype.talk = function () {
  console.log(`${this.name} can talk`);
};

const user = new User("Salim");

user.walk();
user.talk();

User.prototype.swim = function () {
  console.log(`${this.name} can swim`);
};

user.swim();

export default {};
