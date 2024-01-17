import { atom } from "jotai"

export const loadingStore = atom(true)
export const appStore = atom({
  hadLogin: false,
  userInfo: {},
  todoList: [],
  token: ""
})
