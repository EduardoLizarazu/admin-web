import firebase_app from "app/firebase/config";
import { signOut, getAuth } from "firebase/auth";
import { cookies } from "next/headers";

const auth = getAuth(firebase_app);

export const SignOut = async () => {
    let result = false;
    let error = null;
    try {
        await signOut(auth);
        result = true;
    } catch (e) {
        error = e;
    }
    
    return { result, error };
};
