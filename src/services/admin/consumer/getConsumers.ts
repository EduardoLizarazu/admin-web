import Consumer from 'app/app/admin/consumer/page';
import firebase_app from '../../../firebase/config';
import { ConsumerModel } from '../../../models/users/consumer';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore(firebase_app);
const consumerCollection = "user";

export const getConsumers = async () => {
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
        } = doc.data();
        return new ConsumerModel({
            id: userId,
            name: name,
            lastName: lastName,
            email: '',
            registerDate: new Date(),
            address: '',
            phone: phoneNumber,
            birthDate: new Date(),
            profilePicture: profilePhotoURL,
            apartmentNumber: apartmentNumber,
            condominium : condominium,
            userCategory: userCategory
        });
    });
    return documents;
}

