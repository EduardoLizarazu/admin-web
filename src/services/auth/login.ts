import firebase_app from "app/firebase/config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { cookies } from "next/headers";

const auth = getAuth(firebase_app);

export const LogIn = async (email: string, password: string) => {
  let result = null,
    error = null;
  const cookiesStore: any = cookies();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (userCredential) {
      const user = userCredential.user;
      const token = await user.getIdToken();
      cookiesStore.set("accessToken", token, {
        // path: "/",
        // expires: (new Date().getMinutes() + 30).toString(),
        // httpOnly: true,
        // sameSite: "strict",
      });
      result = { user, token };
    }
  } catch (e) {
    error = e;
  }

  return { result, error };
};
