import type { TTask } from "~types"

interface Props {
  data: TTask
}
export default function Task({data}:Props) {
  return (
    <div className="border border-sky-400">
      <div className="flex justify-between">
        <div className="flex items-center">
          <input type="checkbox" />
          <input type="text" className="border-0" />
        </div>
        <div className="flex items-center">
          <button className="border-0">🗑️</button>
        </div>
      </div>
    </div>
  )
}