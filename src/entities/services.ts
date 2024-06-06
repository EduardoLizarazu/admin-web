import { ReviewModel } from "./review";

interface CatalogServices {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    stock: number;
    images: string[];
    reviews: ReviewModel[];
}

class CatalogServicesModel implements CatalogServices {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    stock: number;
    images: string[];
    reviews: ReviewModel[];

    constructor (
        catalogServices: CatalogServices, reviews: ReviewModel[]
    ) {
        this.id = catalogServices.id;
        this.name = catalogServices.name;
        this.description = catalogServices.description;
        this.category = catalogServices.category;
        this.price = catalogServices.price;
        this.stock = catalogServices.stock;
        this.images = catalogServices.images;
        this.reviews = reviews;
    }
    
    toPlainObject() {
        return {
            id: this.id || "",
            name: this.name || "",
            description: this.description || "",
            category: this.category || "",
            price: this.price || 0,
            stock: this.stock || 0,
            images: this.images || [],
            reviews: this.reviews || []
        };
    } 

}
