import {atom } from "jotai"
import { LocalStorageUtil } from "@repo/storage"

import type { TTask } from "~types"

export const TaskStore = atom([] as TTask[])

export const userStore = atom({
  userName: "Some User",
  avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
})