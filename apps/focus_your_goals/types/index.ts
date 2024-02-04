// 优先级枚举
export enum EPriority {
  LOW = 0,
  MIDDLE = 1,
  HIGH = 2,
}

export type TTask = {
  id: string
  title: string
  isCompleted: boolean
  createdAt: number
  children?: TTask[]
  // 优先级
  priority: EPriority
}
