
"use server";
import { IProductPrimitive, ProductEntity } from "app/entities/product/product.entity";
import { createProduct } from "app/services/product/product.service";


export const createProductAction = async (product : IProductPrimitive) => {
    try {
        const productEntity = ProductEntity.create(product);

        await createProduct(productEntity);
    } catch (error) {
        console.log("ERROR ACTIONS: ", error);
    }
}