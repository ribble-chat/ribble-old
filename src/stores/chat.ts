import { writable } from "svelte/store";

export let currentGroup = writable(undefined);

export function setCurrentGroup(groupName: string) {
  currentGroup.set(groupName);
  console.log(`current group set to ${groupName}`);
}