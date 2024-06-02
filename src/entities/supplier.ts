interface ISupplier extends IUser {
    nit: string;
    companyName: string;
    companyAddress: string;
    companyPhone: string;
    companyManagerEmail: string;
    licenseType : string;
    certificateType : string;
    requestStatus: number;
    companyOffers: string[];
}

export class SupplierModel implements ISupplier {
    id: string;
    name: string;
    lastName: string;
    email: string;
    registerDate: Date;
    phone: string;
    birthDate: Date;
    userCategory: string;
    profilePicture: string;
    nit: string;
    companyName: string;
    companyAddress: string;
    companyPhone: string;
    companyManagerEmail: string;
    licenseType : string;
    certificateType : string;
    requestStatus: number;
    companyOffers: string[];

    constructor (
        supplier: ISupplier
    ) {
        this.id = supplier.id;
        this.name = supplier.name;
        this.lastName = supplier.lastName;
        this.email = supplier.email;
        this.registerDate = supplier.registerDate;
        this.phone = supplier.phone;
        this.birthDate = supplier.birthDate;
        this.userCategory = supplier.userCategory;
        this.profilePicture = supplier.profilePicture;
        this.nit = supplier.nit;
        this.companyName = supplier.companyName;
        this.companyAddress = supplier.companyAddress;
        this.companyPhone = supplier.companyPhone;
        this.companyManagerEmail = supplier.companyManagerEmail;
        this.licenseType = supplier.licenseType;
        this.certificateType = supplier.certificateType;
        this.companyOffers = supplier.companyOffers;
        this.requestStatus = supplier.requestStatus;
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
            userCategory: this.userCategory,
            profilePicture: this.profilePicture,
            nit: this.nit,
            companyName: this.companyName,
            companyAddress: this.companyAddress,
            companyPhone: this.companyPhone,
            companyManagerEmail: this.companyManagerEmail,
            licenseType: this.licenseType,
            certificateType: this.certificateType,
            companyOffers: this.companyOffers,
            requestStatus: this.requestStatus
        };
    }
}