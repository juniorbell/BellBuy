import { RouteObject } from "react-router-dom";
import LoginScreen from "./login/screens/LoginScreen";

export const LoginRoutes: RouteObject[] = [
    {
        path: '/login',
        element: <LoginScreen />,
    },
];