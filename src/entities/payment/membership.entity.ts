
export interface IMembershipPrimitive {
    id: string;
    userId: string;
    typeId: string;
    finishDate: Date;
}

export class MembershipEntity implements IMembershipPrimitive {
    id: string;
    userId: string;
    typeId: string;
    finishDate: Date;

    constructor(data: IMembershipPrimitive) {
        this.id = data.id;
        this.userId = data.userId;
        this.typeId = data.typeId;
        this.finishDate = data.finishDate;
    }

    static create(data: IMembershipPrimitive): MembershipEntity {
        const membership = new MembershipEntity(data);
        return membership;
    }

    toPrimitive(): IMembershipPrimitive {
        return {
            id: this.id,
            userId: this.userId,
            typeId: this.typeId,
            finishDate: this.finishDate
        };
    }
}