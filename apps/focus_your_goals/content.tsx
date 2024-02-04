import { RouterProvider } from "@tanstack/react-router";





// import "./style.css"
import cssText from "data-text:~style.css"
export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

import { router } from "~router"

function IndexSidePanel() {
  return <RouterProvider router={router} />
}

export default IndexSidePanel