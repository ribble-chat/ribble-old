import * as signalR from "@microsoft/signalr";

const serverAddress = "http://localhost:5000";

const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${serverAddress}/chat`, {
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets,
  })
  .configureLogging(signalR.LogLevel.Information)
  .build();

connection.on("message-received", (user, msg) => {
  console.log(user, msg);
});

export async function callServer(user, msg) {
  await connection.invoke("SendMessage", user, msg);
}

export function wrapper() {
  async function start() {
    try {
      await connection.start();
      console.log("SignalR Connected.");
    } catch (err) {
      console.log(err);
      setTimeout(start, 5000);
    }
  }

  connection.onclose(start);
  start();
}
