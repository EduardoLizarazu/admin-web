
"use server";
import { IProductPrimitive, ProductEntity } from "app/entities/product/product.entity";
import { editProduct, getProduct } from "app/services/product/product.service";
import { getAccessToken, decodeJWT } from "app/utils/index.utils";
import { productCategory } from "app/utils/constants.utils";

// Editar producto
export const editProductAction = async (product : IProductPrimitive) => {
    try {
        const productEntity = ProductEntity.create(product);

        await editProduct(productEntity);
    } catch (error) {
        console.log("ERROR ACTIONS: ", error);
    }
}

// Obtener product por id
export const getProductByIdAction = async (id: string) => {
    try {
        const productEntity = await getProduct(id);
        const productPrimitive = productEntity?.toPrimitive();
        return productPrimitive || null;
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

export const getProductCategoryAction = () => {
    const productCategoryPrimitive = productCategory;
    return productCategoryPrimitive;
}


