
"use server";
import { IProductPrimitive, ProductEntity } from "app/entities/product/product.entity";
import { createProduct } from "app/services/product/product.service";
import { getAccessToken, decodeJWT } from "app/utils/index.utils";


export const createProductAction = async (product : IProductPrimitive) => {
    try {
        const productEntity = ProductEntity.create(product);

        await createProduct(productEntity);
    } catch (error) {
        console.log("ERROR ACTIONS: ", error);
    }
}

export const getTokenDecodedAction = async () => {
    const token = await getAccessToken();
    if (token) {
        const decoded : any = decodeJWT(token);
        console.log("DECODED: ", decoded.user_id);
        return decoded;
    }
    
    return null;
}