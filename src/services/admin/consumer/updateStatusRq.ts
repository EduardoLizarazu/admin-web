import firebase_app from 'app/firebase/config';
import { getFirestore, UpdateData, updateDoc, doc} from 'firebase/firestore';


const db = getFirestore(firebase_app);
const consumerCollection = "user";

export const updateStatusRq = async (id:string, statusRq:number) => {
    const updateUserStatus = updateDoc(doc(db, consumerCollection, id), {
        requestStatus: statusRq
    });
    console.log(updateUserStatus);
    return updateUserStatus;
}