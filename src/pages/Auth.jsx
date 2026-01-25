import RegisterForm from "../components/auth/RegisterForm";
import LoginForm from "../components/auth/LoginForm";
import { useState } from "react";

const Auth = () => {
  const [ isLogin, setIsLogin ] = useState(false);
  
  const toggleAuthMode = () => {
    setIsLogin(prev => !prev);
  }

  return (
    <div>
      {isLogin ? <LoginForm/> : <RegisterForm/>}
      <button onClick={toggleAuthMode}>{isLogin ? "Don't have an account? Register" : "Already have an account? LogIn"}</button>
    </div>
  );
}

export default Auth;