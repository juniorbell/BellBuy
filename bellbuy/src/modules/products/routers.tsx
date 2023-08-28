import { RouteObject } from "react-router-dom";
import Product from "./screens/Product";

export enum ProducRoutesEnum {
    PRODUCT = '/produtos'
}

export const ProductScreens: RouteObject[] = [
    {
        path: ProducRoutesEnum.PRODUCT,
        element: <Product />,

    },
];