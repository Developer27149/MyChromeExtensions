import { atom } from "jotai"

import type { TTaskList } from "~types"

export const taskListAtom = atom([
  {
    id: "1",
    title: "test",
    enableNotify: true,
    notifyTime: new Date().valueOf(),
    tasks: [
      {
        id: "1",
        title: "test",
        description: "test",
        isCompleted: false,
        notifyTime: new Date().valueOf(),
        createdAt: new Date().valueOf(),
        dealTime: new Date().valueOf()
      }
    ]
  }
] as TTaskList[])
export const taskListStore = atom(
  (get) => get(taskListAtom),
  (get, set, update: TTaskList[]) => {
    // save to storage
    set(taskListAtom, update)
  }
)
