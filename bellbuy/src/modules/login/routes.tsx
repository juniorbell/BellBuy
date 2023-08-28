import { RouteObject } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

export enum LoginRoutesEnum {
    LOGIN = '/login'
}

export const LoginRoutes: RouteObject[] = [
    {
        path: LoginRoutesEnum.LOGIN,
        element: <LoginScreen />,
    },
];