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
    <div className="p-3">
      <Head />
      <Outlet />
    </div>
  )
}
