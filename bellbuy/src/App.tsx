import type { Router as RemixRouter } from "@remix-run/router";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './main.css';
import { FirstScreenRoutes } from "./modules/fisrtScreen/routes";
import { LoginRoutes } from "./modules/login/routes";
import { ProductScreens } from "./modules/products/routers";
import { useNotification } from "./shared/hooks/useNotification";



const router: RemixRouter = createBrowserRouter([...FirstScreenRoutes, ...LoginRoutes, ...ProductScreens]);

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
