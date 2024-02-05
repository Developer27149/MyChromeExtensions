import { Outlet } from "@tanstack/react-router"
import Head from "~components/Head"

export default function () {
  return (
    <div className="fixed top-0 left-0 h-[100vh] grid grid-cols-[64px_auto] min-w-[480px] bg-gray-50 text-blue border-r border-red-300">
      <Head />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
