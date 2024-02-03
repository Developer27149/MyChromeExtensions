import { useNavigate } from "@tanstack/react-router"
import { useAtom } from "jotai"
import { useEffect } from "react"

import { taskListAtom } from "~stores"

export default function () {
  const navigate = useNavigate()
  const [taskList, setTaskList] = useAtom(taskListAtom)
  return (
    <div className="border">
      <div className="w-[250px] m-8 bg-gray-50 p-2 border">
        <h3 className="text-[20px] font-bold mb-1">All Tasks</h3>
        <div className="mb-8 text-sm font-bold text-blue-600">
          Total {taskList.length} task
        </div>
        <div> 12/23 </div>
      </div>
      {taskList.map(({ title, tasks, enableNotify, notifyTime, id }) => {
        return (
          <div className="grid grid-cols-[40px_auto]" key={id}>
            <span>x</span>
            <div>{title}</div>
          </div>
        )
      })}
    </div>
  )
}
