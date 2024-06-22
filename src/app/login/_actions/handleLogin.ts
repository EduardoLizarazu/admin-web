"use server";
import { LogIn } from "app/services/auth/login"
import { redirect } from "next/navigation"
import { stringify } from "querystring";



export const handleLogin = async (email:string, password: string) => {
    // const formDataObject = Object.fromEntries(formData)
    const { result, error } = await LogIn(email as string, password as string)
    console.log(result?.token);
    
    if(result){
        redirect('/supplier')
    } 
    return false;
  }