

export interface IMembershipTypePrimitive {
    id : string;
    type: string;
    description: string;
    price: number;
    duration: number; // Days
    details: string;
    status: number;
}

export class MembershipTypeEntity implements IMembershipTypePrimitive {
    id: string;
    type: string;
    description: string;
    price: number;
    duration: number;
    details: string;
    status: number;

    constructor(data: IMembershipTypePrimitive) {
        this.id = data.id;
        this.type = data.type;
        this.description = data.description;
        this.price = data.price;
        this.duration = data.duration;
        this.details = data.details;
        this.status = data.status;
    }

    transformDuration() {
        if (this.duration === 0) {
            return "Ilimitado";
        }
        return `${this.duration} días`;
    }

    static create(data: IMembershipTypePrimitive) {
        return new MembershipTypeEntity(data);
    }

    static createArray(data: IMembershipTypePrimitive[]) {
        return data.map(MembershipTypeEntity.create);
    }

    toPrimitive() : IMembershipTypePrimitive {
        return {
            id: this.id,
            type: this.type,
            description: this.description,
            price: this.price,
            duration: this.duration,
            details: this.details,
            status: this.status
        }
    }

    toPrimitiveArray(data: MembershipTypeEntity[]) {
        return data.map((item) => item.toPrimitive());
    }
}