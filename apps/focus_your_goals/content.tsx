import { RouterProvider } from "@tanstack/react-router";





// import "./style.css"
import cssText from "data-text:~style.css"

import { add } from "@repo/shared_utils"
import { useEffect } from "react"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

import { router } from "~router"

function IndexSidePanel() {
  useEffect(() => {
    const b = add(1, 2)
    console.log(b)
  }, [])
  return <RouterProvider router={router} />
}

export default IndexSidePanel