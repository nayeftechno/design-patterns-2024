import {
  AddCommand,
  MultiplyCommand,
  AddThenMultiplyCommand,
} from "./Commands.js";

class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }
  excuteCommand(command) {
    this.value = command.excute(this.value);
    this.history.push(command);
    this.print();
  }
  undoCommand() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
    this.print();
  }
  print() {
    console.log(`Value: ${this.value}`);
  }
  divider() {
    console.log("🔥".repeat(20));
  }
}

const calculator = new Calculator();

calculator.excuteCommand(new AddCommand(2));
calculator.excuteCommand(new AddCommand(5));

calculator.undoCommand();
calculator.undoCommand();

calculator.divider();

calculator.excuteCommand(new AddCommand(1));

calculator.excuteCommand(new MultiplyCommand(2));
calculator.excuteCommand(new MultiplyCommand(3));

calculator.undoCommand();
calculator.undoCommand();

calculator.divider();

calculator.excuteCommand(new AddThenMultiplyCommand(5, 3));
calculator.undoCommand();

export default {};
