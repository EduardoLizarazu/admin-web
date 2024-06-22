import firebase_app from '../../../firebase/config';
import { ConsumerModel } from '../../../entities/consumer';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';

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
            email: "example@gmail.com",
            registerDate: new Date(),
            phone: phoneNumber,
            birthDate: new Date(),
            profilePicture: profilePhotoURL,
            apartmentNumber: apartmentNumber,
            condominium : condominium,
            userCategory: userCategory
        });
    });

    const consumers = documents.filter(
        (consumer) => consumer.userCategory === "Habitante");

    return consumers;
}

export const getConsumer = async (id: string) => {
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
        } = docSnap.data();

        const consumerModel = new ConsumerModel({
            id: userId,
            name: name,
            lastName: lastName,
            email: "example@gmail.com",
            registerDate: new Date(),
            phone: phoneNumber,
            birthDate: new Date(),
            profilePicture: profilePhotoURL,
            apartmentNumber: apartmentNumber,
            condominium : condominium,
            userCategory: userCategory
        });
        return consumerModel;

    } else {
        console.log("No such document!");
        return null;
    }
}