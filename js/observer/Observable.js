function Observable() {
  this.observers = [];
}
Observable.prototype.subscribe = function (fn) {
  this.observers.push(fn);
  return this;
};
Observable.prototype.unsubscribe = function (fn) {
  this.observers = this.observers.filter((observer) => observer !== fn);
};
Observable.prototype.notify = function (data) {
  this.observers.forEach((observer) => observer(data));
};

const observable = new Observable();

export { observable };
