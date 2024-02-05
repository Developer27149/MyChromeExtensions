import { useAtom } from "jotai"
import Task from "~components/Task"

import { TaskStore } from "~stores"

export default function () {
  const [taskList, setTaskList] = useAtom(TaskStore)
  console.log(taskList)
  return (
    <div className="border border-sky-400">
      {
        taskList.length > 0 ? taskList.map(task => <Task key={task.id} data={task} />) : (
          <div className="text-center">
            <p>No task yet</p>
          </div>
        )
      }
    </div>
  )
}
