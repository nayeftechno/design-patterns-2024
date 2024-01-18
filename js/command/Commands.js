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

class AddThenMultiplyCommand {
  constructor(valueToAdd, valueToMultiply) {
    this.valueToAdd = new AddCommand(valueToAdd);
    this.valueToMultiply = new MultiplyCommand(valueToMultiply);
  }
  excute(currentValue) {
    return this.valueToMultiply.excute(this.valueToAdd.excute(currentValue));
  }
  undo(currentValue) {
    return this.valueToAdd.undo(this.valueToMultiply.undo(currentValue));
  }
}

export { AddCommand, MultiplyCommand, AddThenMultiplyCommand };
