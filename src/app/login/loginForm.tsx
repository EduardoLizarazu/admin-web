"use client";
import React, { useState } from "react";
import { handleLogin } from "./_actions/handleLogin";
import { Input } from "@nextui-org/react";

export default function LoginForm() {
  const [email, setEmail] = useState("ex02@gmail.com");
  const [password, setPassword] = useState("Passw0rd");

  const [logInError, setlogInError] = useState(false);

  const validateEmail = (email:string) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("Login attempt:", email, password);
    const result = await handleLogin(email, password);
    if (!result) {
      setlogInError(!result);
    }
  };

  const isInvalid = React.useMemo(() => {
    if (email === "") return false;

    validateEmail(email) ? false : true;
  }, [email]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        value={email}
        size={"md"}
        variant="bordered"
        onValueChange={setEmail}
        type="email"
        label="Correo"
        errorMessage="Please enter a valid email"
        isInvalid={isInvalid}
        color={isInvalid ? "danger" : "default"}
      />
      <Input
        value={password}
        size={"md"}
        variant="bordered"
        onValueChange={setPassword}
        type="password"
        label="Contraseña"
      />
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Log In
        </button>
      </div>
    </form>
  );
}
