import { RootRoute, Route, Router } from "@tanstack/react-router"

import Views from "~Views"
import Detail from "~Views/Detail"
import Main from "~Views/Main"
import Setting from "~Views/Setting"

const rootRoute = new RootRoute({
  component: Views
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Main
})

const detailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/detail",
  component: Detail
})

const settingRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/setting",
  component: Setting
})

const routeTree = rootRoute.addChildren([indexRoute, detailRoute, settingRoute])

export const router = new Router({ routeTree })
