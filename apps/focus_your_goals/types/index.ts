export type TTask = {
  id: string
  title: string
  description: string
  isCompleted: boolean
  createdAt: number
  dealTime: number
  notifyTime: number
  enableNotify: boolean
}

export type TTaskList = {
  id: string
  title: string
  tasks: TTask[]
  enableNotify: boolean
  notifyTime: number
}
