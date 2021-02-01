import * as signalR from "@microsoft/signalr";
import { currentGroup } from "../stores/chat";
import { get } from "svelte/store";

const serverAddress = "ws://localhost:5000";

const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${serverAddress}/chat`, {
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets,
  })
  .configureLogging(signalR.LogLevel.Information)
  .build();

connection.on("joined-group", (groupName: string, user: string) => {
  console.log(`${user} joined ${groupName}`);
});

connection.on("message-received", (msgAuthor: string, msg: string) => {
  console.log(`${msgAuthor} said ${msg} to group: ${get(currentGroup)}`);
});

export async function joinGroup(groupName: string, user: string) {
  await connection.invoke("JoinGroup", groupName, user);
}

export async function sendMessageToGroup(msg: string) {
  await connection.invoke("SendMessageToGroup", get(currentGroup), msg);
}

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
