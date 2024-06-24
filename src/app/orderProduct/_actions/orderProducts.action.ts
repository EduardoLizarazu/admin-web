

"use server";
import { IProductPrimitive, ProductEntity } from "app/entities/product/product.entity";
import { getProducts } from "app/services/product/product.service";
import { getAccessToken, decodeJWT } from "app/utils/index.utils";
import { productCategory } from "app/utils/constants.utils";


// Obtener todos los productos
export const getProductsAction = async () => {
    try {
        const products = await getProducts();
        return products.map(product => product.toPrimitive());
    } catch (error) {
        console.log("ERROR ACTIONS: ", error);
    }
}

export const getProductCategoryAction = async () => {
    return await productCategory;
}