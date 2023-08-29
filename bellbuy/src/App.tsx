import type { Router as RemixRouter } from "@remix-run/router";
import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import './main.css';
import { FirstScreenRoutes } from "./modules/fisrtScreen/routes";
import { LoginRoutes } from "./modules/login/routes";
import { ProductScreens } from "./modules/products/routers";
import { verifyLoggedIn } from "./shared/functions/connection/auth";
import { useGlobalContext } from "./shared/hooks/useGlobalContext";
import { useNotification } from "./shared/hooks/useNotification";




function App() {
  const { contextHolder } = useNotification();
  const { user, setUser } = useGlobalContext();

  const routes: RouteObject[] = [...LoginRoutes];
  const routesLoggedIn: RouteObject[] = [...FirstScreenRoutes, ...ProductScreens].map(
    (route) => ({
      ...route,
      loader: () => verifyLoggedIn(setUser, user),
    }));
  const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn]);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  )
}

export default App
