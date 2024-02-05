import { RouterProvider } from "@tanstack/react-router";

import "./style.css"

import { router } from "~router"

function IndexSidePanel() {
  return <RouterProvider router={router} />
}

export default IndexSidePanel