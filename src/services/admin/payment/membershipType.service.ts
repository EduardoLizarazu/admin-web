

import firebase_app from '../../../firebase/config';
import { MembershipTypeEntity } from '../../../entities/payment/membershipType.entity';
import { getFirestore, collection, getDocs, getDoc, doc, setDoc, deleteDoc, addDoc } from 'firebase/firestore';

const db = getFirestore(firebase_app);
const consumerCollection = "memberships";


// obtener todos los tipos de membresía
export const getMembershipTypes  = async () => {
    const collectionRef = collection(db, consumerCollection);
    const snapshot = await getDocs(collectionRef);
    const documents = snapshot.docs.map(doc => {
        const { 
            id,
            type,
            description,
            price,
            duration,
            details,
            status
        } = doc.data();

        const membershipType = new MembershipTypeEntity({
            id: id,
            type: type,
            description: description,
            price: price,
            duration: duration,
            details: details,
            status: status
        });

        return membershipType;
    });

    return MembershipTypeEntity.createArray(documents);
}

// Obtener un tipo de membresía con id
export const getMembershipType = async (id: string) => {
    const docRef = doc(db, consumerCollection, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const { 
            id,
            type,
            description,
            price,
            duration,
            details,
            status
        } = docSnap.data();

        const membershipType = new MembershipTypeEntity({
            id: id,
            type: type,
            description: description,
            price: price,
            duration: duration,
            details: details,
            status: status
        });

        return membershipType;
    } else {
        return null;
    }
}

// Editar
export const editMembershipType = async (membershipType: MembershipTypeEntity) => {
    try {
        await setDoc(
            doc(db, consumerCollection, membershipType.id), 
            membershipType.toPrimitive()
        );
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}

// Editar estado
export const editMembershipTypeStatus = async (id: string, status: number) => {
    try {
        await setDoc(
            doc(db, consumerCollection, id), 
            { status: status }, 
            { merge: true }
        );
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}

// Crear
export const createMembershipType = async (membershipType: MembershipTypeEntity) => {
    try {
        const docRef = await addDoc(collection(db, consumerCollection), membershipType.toPrimitive());
        await setDoc(docRef, { id: docRef.id }, { merge: true });
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

// Eliminar
export const deleteMembershipType = async (id: string) => {
    try {
        await deleteDoc(doc(db, consumerCollection, id));
    } catch (error) {
        console.error("Error removing document: ", error);
    }
}

