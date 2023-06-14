import {RouterProvider, createBrowserRouter } from "react-router-dom"
import TodoPage from "../pages/TodoPage/todo.page"
import ProfilePage from "../pages/ProfilePage/profile.page"

 const router = createBrowserRouter([
    {
    path: "/",
    element: <TodoPage />
    },
    {
    path: "/profile/userTag",
    element: <ProfilePage/>
},
  {
    path:"/erreur/",
    element: <TodoPage/>
  },

{
path: "/@issue",
element: <h1>Issue</h1>
}
 ])

function RouteMap() {
    return <RouterProvider router={router}/>
}

export default RouteMap