class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }
  excuteCommand(command) {
    this.value = command.excute(this.value);
    this.history.push(command);
  }
  undoCommand() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }
}
Calculator.prototype.print = function () {
  console.log(`Value: ${this.value}`);
};
export default {};
