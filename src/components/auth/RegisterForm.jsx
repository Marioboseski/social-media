import useForm from "../../hooks/useForm";
import validateRegisterForm from "../../utils/validateRegisterForm";
import { User } from "lucide-react";

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
}

const RegisterForm = () => {
  const { errors, values, handleChange, handleSubmit } = useForm(initialValues, validateRegisterForm);

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
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
        placeholder="Lastname"
        className="form-inputs" />

        {errors.lastName && <p>{errors.lastName}</p>}

        <input type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
        className="form-inputs" />

        {errors.email && <p>{errors.email}</p>}

        <input type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="*******"
        className="form-inputs" />

        {errors.password && <p>{errors.password}</p>}

        <input type="text"
        name="location"
        value={values.location}
        onChange={handleChange}
        placeholder="Location"
        className="form-inputs" />

        {errors.location && <p>{errors.location}</p>}

        <button type="submit" className="form-buttons">Send</button>
      </form>

    </div>
  );
}

export default RegisterForm;