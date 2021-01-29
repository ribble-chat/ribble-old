import * as signalR from "@microsoft/signalr";

export function wrapper() {
  console.log("testtttttttttt!!!!!!!!!!");
  const serverAddress = "http://localhost:5000";
  const connection = new signalR.HubConnectionBuilder()
    .withUrl(`${serverAddress}/chat`)
    .configureLogging(signalR.LogLevel.Information)
    .build();

  async function start() {
    try {
      await connection.start();
      console.log("SignalR Connected.");
    } catch (err) {
      console.log(err);
      setTimeout(start, 5000);
    }
  }

  start();
}
