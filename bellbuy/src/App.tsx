import type { Router as RemixRouter } from "@remix-run/router";
import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import './main.css';
import { LoginRoutes } from "./modules/routes";
import { useNotification } from "./shared/hooks/useNotification";

const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Tela Principal</div>,
    errorElement: <div>Página não encontrada</div>
  },
]

const router: RemixRouter = createBrowserRouter([...mainRoutes, ...LoginRoutes,]);

function App() {
  const { contextHolder } = useNotification();

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  )
}

export default App
