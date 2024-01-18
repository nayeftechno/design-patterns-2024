import { AddCommand } from "./Commands.js";

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

export default {};
