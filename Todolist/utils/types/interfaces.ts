export interface IUserInfo {}
export interface ITodo {
  id: number | string
  text: string
  tag?: string
}
export interface IAppStore {
  token: string
  userInfo: IUserInfo
  todoList: ITodo[]
  hadLogin: boolean
}
