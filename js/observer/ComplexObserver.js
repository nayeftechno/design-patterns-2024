function ComplexObserver() {
  this.observers = [];
}
ComplexObserver.prototype.subscribe = function (fn) {
  this.observers.push(fn);
  return this;
};
ComplexObserver.prototype.unsubscribe = function (fn) {
  this.observers = this.observers.filter((observer) => observer !== fn);
};
ComplexObserver.prototype.notify = function (data) {
  this.observers.forEach((observer) => observer(data));
};

const observable = new ComplexObserver();

export { observable };
