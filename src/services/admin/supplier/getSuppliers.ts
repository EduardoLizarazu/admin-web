import firebase_app from '../../../firebase/config';
import { SupplierModel } from '../../../entities/supplier';
import { getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore';

const db = getFirestore(firebase_app);
const consumerCollection = "user";

export const getSuppliers = async () => {
    const collectionRef = collection(db, consumerCollection);
    const snapshot = await getDocs(collectionRef);
    const documents = snapshot.docs.map(doc => {
        const { 
            userId, 
            name, 
            lastName, 
            apartmentNumber, 
            profilePhotoURL, 
            phoneNumber,  
            condominium,
            userCategory,
            companyName,
            companyOffers,
            companyPhone,
            licenseType,
            nit,
            requestStatus
        } = doc.data();

        const suppliersModel = new SupplierModel({
            id: userId,
            name: name,
            lastName: lastName,
            email: "@falta",
            registerDate: new Date(),
            phone: phoneNumber,
            birthDate: new Date(),
            profilePicture: profilePhotoURL,
            nit: nit,
            companyName: companyName,
            companyAddress: "",
            companyPhone: companyPhone,
            companyManagerEmail: "",
            licenseType: licenseType,
            certificateType: "",
            companyOffers: ["FALTA"],
            userCategory: userCategory,
            requestStatus: requestStatus,
        });

        return suppliersModel;
    });

    const suppliers = documents.filter((supplier) => supplier.userCategory === "Proveedor")

    return suppliers;
}


export const getSupplier = async (id: string) => {
    // const docRef = collection(db, consumerCollection, id);
    // console.log(docRef);
    const docRef = doc(db, consumerCollection, id);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {        
        const { 
            userId, 
            name, 
            lastName, 
            apartmentNumber, 
            profilePhotoURL, 
            phoneNumber,  
            condominium,
            userCategory,
            companyName,
            companyOffers,
            companyPhone,
            licenseType,
            nit,
            requestStatus
        } = docSnap.data();

        const suppliersModel = new SupplierModel({
            id: userId,
            name: name,
            lastName: lastName,
            email: "@falta",
            registerDate: new Date(),
            phone: phoneNumber,
            birthDate: new Date(),
            profilePicture: profilePhotoURL,
            nit: nit,
            companyName: companyName,
            companyAddress: "",
            companyPhone: companyPhone,
            companyManagerEmail: "",
            licenseType: licenseType,
            certificateType: "",
            companyOffers: ["FALTA"],
            userCategory: userCategory,
            requestStatus: requestStatus,
        });
        return suppliersModel;

    } else {
        console.log("No such document!");
        return null;
    }
}