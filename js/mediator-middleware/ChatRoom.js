export default class ChatRoom {
  logMessage(user, message) {
    console.log(`Name : ${user.name}`);
    console.log(`Message : ${message}`);
    console.log("🤖".repeat(10));
  }
}
