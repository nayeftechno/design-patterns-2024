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

export { AddCommand };
