import ChatRoom from "./ChatRoom.js";

class User {
  constructor(name) {
    this.name = name;
    this.chatRoom = new ChatRoom();
  }
  send(message) {
    this.chatRoom.logMessage(this, message);
  }
}

const salim = new User("Salim");
salim.send("Hello, All");

const reem = new User("Reem");
reem.send("Welcome Bro.... 👋 👋 👋");

export default {};
