import { RouteObject } from "react-router-dom";
import Product from "./screens/Product";

export enum ProductRoutesEnum {
    PRODUCT = '/produtos'
}

export const ProductScreens: RouteObject[] = [
    {
        path: ProductRoutesEnum.PRODUCT,
        element: <Product />,

    },
];