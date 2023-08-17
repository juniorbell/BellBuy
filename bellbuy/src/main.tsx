/* eslint-disable simple-import-sort/imports */
import type { Router as RemixRouter } from "@remix-run/router";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import './main.css';
import { LoginRoutes } from "./modules/routes";
const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Tela Principal</div>,
    errorElement: <div>Página não encontrada</div>
  },
]


const router: RemixRouter = createBrowserRouter([...mainRoutes, ...LoginRoutes]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
