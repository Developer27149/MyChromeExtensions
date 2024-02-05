import { useAtom } from "jotai"
import Task from "~components/Task"

import { TaskStore } from "~stores"

export default function () {
  const [taskList, setTaskList] = useAtom(TaskStore)
  console.log(taskList)
  return (
    <div className="h-[100vh]">
      <div className="border border-sky-400 h-[calc(100vh-200px)]">
      {
        taskList.length > 0 ? taskList.map(task => <Task key={task.id} data={task} />) : (
          <div className="text-center">
            <p>No task yet</p>
          </div>
        )
      }
    </div>
    <div className="h-[200px] bg-green-100">
      <div className="bg-gray-500 rounded-[12px] overflow-hidden h-[14px] p-[2px]">
      <div className="bg-white" style={{
        width: '65%'
      }}>5.5 hours had gone...</div>
    </div>
    </div>
    </div>
  )
}
