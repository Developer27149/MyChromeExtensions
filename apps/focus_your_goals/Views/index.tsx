import { Outlet } from "@tanstack/react-router"
import { useNavigate } from "@tanstack/react-router"
import { useEffect } from "react"

import Head from "~components/Head"

export default function () {
  const navigate = useNavigate()

  useEffect(() => {
    navigate({ to: "/" })
  }, [])
  return (
    <div className="p-3 bg-sky-50 w-[400px] h-[100vh] overflow-y-auto fixed top-0">
      <Head />
      <Outlet />
    </div>
  )
}
