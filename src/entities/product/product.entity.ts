export interface IProductPrimitive {
    id: string;
    userId: string;
    categoryId: string;
    name: string;
    description: string;
    price: number;
    stock: number;
}

export class ProductEntity implements IProductPrimitive {
    id: string;
    userId: string;
    categoryId: string;
    name: string;
    description: string;
    price: number;
    stock: number;

    constructor(data: IProductPrimitive) {
        this.id = data.id;
        this.userId = data.userId;
        this.categoryId = data.categoryId;
        this.name = data.name;
        this.description = data.description;
        this.price = data.price;
        this.stock = data.stock;
    }

    static create(data: IProductPrimitive) {
        return new ProductEntity(data);
    }

    toPrimitive() : IProductPrimitive {
        return {
            id: this.id,
            userId: this.userId,
            categoryId: this.categoryId,
            name: this.name,
            description: this.description,
            price: this.price,
            stock: this.stock
        };
    }

    static createArray(data: IProductPrimitive[]) {
        return data.map(item => new ProductEntity(item));
    }

    static createPrimitiveArray(data: ProductEntity[]) {
        return data.map(item => item.toPrimitive());
    }
}