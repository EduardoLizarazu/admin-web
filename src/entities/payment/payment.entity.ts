

export interface IPaymentPrimitive {
    id: string;
    amount: number;
    membershipId : string;
    paymentMethodId : string;
    paymentProofTypeId : string;

}


export class PaymentEntity implements IPaymentPrimitive {
    id: string;
    amount: number;
    membershipId: string;
    paymentMethodId: string;
    paymentProofTypeId: string;

    constructor(data: IPaymentPrimitive) {
        this.id = data.id;
        this.amount = data.amount;
        this.membershipId = data.membershipId;
        this.paymentMethodId = data.paymentMethodId;
        this.paymentProofTypeId = data.paymentProofTypeId;
    }

    static create(data: IPaymentPrimitive): PaymentEntity {
        const payment = new PaymentEntity(data);
        return payment;
    }

    toPrimitive(): IPaymentPrimitive {
        return {
            id: this.id,
            amount: this.amount,
            membershipId: this.membershipId,
            paymentMethodId: this.paymentMethodId,
            paymentProofTypeId: this.paymentProofTypeId
        };
    }

}