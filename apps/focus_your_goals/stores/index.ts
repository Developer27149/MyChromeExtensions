import { atomWithStorage } from "jotai/utils"
import { LocalStorageUtil } from "@repo/storage"

import type { TTask } from "~types"

export const TaskStore = atomWithStorage('tasks', [] as TTask[], LocalStorageUtil)
