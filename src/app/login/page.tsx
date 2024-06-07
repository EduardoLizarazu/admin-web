import LoginForm from "./loginForm";

export default function Login() {
  return (
    <div className="flex min-h-screen bg-gray-100 justify-center items-center">
      <div className="p-8 bg-white shadow-sm rounded-lg">
        <LoginForm />
      </div>
    </div>
  );
}
