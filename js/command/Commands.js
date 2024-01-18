class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }
  excute(currentValue) {
    return this.valueToAdd + currentValue;
  }
  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }
  excute(currentValue) {
    return this.valueToMultiply * currentValue;
  }
  undo(currentValue) {
    return currentValue / this.valueToMultiply;
  }
}

export { AddCommand, MultiplyCommand };
