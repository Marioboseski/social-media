import useForm from "../../hooks/useForm";
import validateLoginForm from "../../utils/validateLoginForm";
import { User } from "lucide-react";

const initialValues = {
  name: "",
  email: "",
  password: "",
}

const LoginForm = () => {
  const { errors, values, handleChange, handleSubmit } = useForm(initialValues, validateLoginForm)

  return (
    <div className="form-layout">
      <User className="user-icon-form"/>
      <form onSubmit={handleSubmit} className="auth-form">
        <input type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Name"
          className="form-inputs" />

        {errors.name && <p>{errors.name}</p>}

        <input type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email" 
          className="form-inputs" />

        {errors.email && <p>{errors.email}</p>}

        <input type="text"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="*******"
          className="form-inputs" />

        {errors.password && <p>{errors.password}</p>}
        <button type="submit" className="form-buttons">Log in</button>
      </form>
    </div>
  );
}

export default LoginForm