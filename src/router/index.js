import React from "react"
import { Navigate } from "react-router-dom"

import Entire from "@/views/entire"
import Detail from "@/views/detail"
const Home = React.lazy(() => import("@/views/home"))
const routes = [

    {
        path: '/',
        element: <Navigate to="/home" />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/entire',
        element: <Entire />
    },
    {
        path: '/detail',
        element: <Detail />
    }
]
export default routes  