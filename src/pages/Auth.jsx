import RegisterForm from "../components/auth/RegisterForm";
import LoginForm from "../components/auth/LoginForm";
import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleAuthMode = () => {
    setIsLogin(prev => !prev);
  }

  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center min-h-dvh gap-2 p-2">
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <button onClick={toggleAuthMode}>{isLogin ? "Don't have an account? Register" : "Already have an account? LogIn"}</button>
      </div>
    </div>
  );
}

export default Auth;