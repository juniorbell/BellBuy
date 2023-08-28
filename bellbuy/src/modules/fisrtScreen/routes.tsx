import { RouteObject } from "react-router-dom";
import FirstScreen from "./screens/firstScreen";


export const FirstScreenRoutes: RouteObject[] = [
    {
        path: '/',
        element: <FirstScreen />,
        errorElement: <div>Página não encontrada</div>

    },
];