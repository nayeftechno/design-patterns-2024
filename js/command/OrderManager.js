import { PlaceOrderCommand } from "./Commands.js";

const user = Object.freeze({
  username: "Reem Salim",
  email: "reem@salim.com",
  mobile: "0789668409",
});

class OrderManager {
  constructor() {
    this.orders = [];
  }
  excuteCommand(command, user) {
    this.orders = command.excute(this.orders, user);
    this.print();
  }
  print() {
    console.log(`Orders : ${this.orders}`);
    console.log("🚀".repeat(10));
  }
}

const orderManager = new OrderManager();

orderManager.excuteCommand(new PlaceOrderCommand("100"), user);
orderManager.excuteCommand(new PlaceOrderCommand("200"));
orderManager.excuteCommand(new PlaceOrderCommand("300"), user);

export default {};
