
interface IConsumer extends IUser {
    apartmentNumber: string;
    userCategory: string;
    condominium: string;
}

export class ConsumerModel implements IConsumer {
    id: string;
    name: string;
    lastName: string;
    email: string;
    registerDate: Date;
    phone: string;
    birthDate: Date;
    profilePicture: string;
    apartmentNumber: string;
    userCategory: string;
    condominium: string;

    constructor (
        consumer: IConsumer
    ) {
        this.id = consumer.id;
        this.name = consumer.name;
        this.lastName = consumer.lastName;
        this.email = consumer.email;
        this.registerDate = consumer.registerDate;
        this.phone = consumer.phone;
        this.birthDate = consumer.birthDate;
        this.profilePicture = consumer.profilePicture;
        this.apartmentNumber = consumer.apartmentNumber;
        this.userCategory = consumer.userCategory;
        this.condominium = consumer.condominium;

    }

    toPlainObject() {
        return {
            id: this.id,
            name: this.name,
            lastName: this.lastName,
            email: this.email,
            registerDate: this.registerDate.toISOString(),
            phone: this.phone,
            birthDate: this.birthDate.toISOString(),
            profilePicture: this.profilePicture,
            apartmentNumber: this.apartmentNumber,
            userCategory: this.userCategory,
            condominium: this.condominium,
        }
    }
}