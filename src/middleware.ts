import firebase_app from "app/firebase/config";
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server'
import { getAuth, signInWithCustomToken,  } from 'firebase/auth';
 
const auth = getAuth(firebase_app);

// This function can be marked `async` if using `await` inside
export async function middleware() {
    // let result = null
    // const auth = getAuth();
    // const cookiesStore : any = cookies();
    // const token = cookiesStore.get('accessToken')?.value;
    // if(token){
    //     const userCredential = await signInWithCustomToken(auth, token);
    //     console.log("MIDDLEWARE: ", userCredential);
        
    // } 
    
}
 
// See "Matching Paths" below to learn more
export const config = {
}