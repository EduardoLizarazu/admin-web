import { ReviewModel } from "./review";

interface IProduct {
    id: string;
    supplierId: string;
    name: string;
    description: string;
    category: string;
    price: number;
    stock: number;
    images: string[];
    state: number;
    reviews : ReviewModel[];
}

export class ProductModel implements IProduct {
    id: string;
    supplierId: string;
    name: string;
    description: string;
    category: string;
    price: number;
    stock: number;
    images: string[];
    state: number;
    reviews : ReviewModel[];

    constructor (
        product: IProduct, reviews: ReviewModel[]
    ) {
        this.id = product.id;
        this.supplierId = product.supplierId;
        this.name = product.name;
        this.description = product.description;
        this.category = product.category;
        this.price = product.price;
        this.stock = product.stock;
        this.images = product.images;
        this.state = product.state;
        this.reviews = reviews;
    }

    toPlainObject() {
        return {
            id: this.id || "",
            supplierId: this.supplierId || "",
            name: this.name || "",
            description: this.description || "",
            category: this.category || "",
            price: this.price || 0,
            stock: this.stock || 0,
            images: this.images || [],
            state: this.state || 0,
            reviews: this.reviews || []
        };
    }
}