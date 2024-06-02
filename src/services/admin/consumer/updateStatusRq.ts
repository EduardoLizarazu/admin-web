import firebase_app from 'app/firebase/config';
import { getFirestore, UpdateData, updateDoc, doc, collection, onSnapshot} from 'firebase/firestore';


const db = getFirestore(firebase_app);
const consumerCollection = "user";

export const updateStatusRq = async (id:string, statusRq:number) => {
    try {
        const updateUserStatus = await updateDoc(doc(db, consumerCollection, id), {
            requestStatus: statusRq
        });
        return { status : true }
    } catch (error) {
        console.error("Error updating status:", error);
        return { status : false }
    }
}
