import useForm from "../../hooks/useForm";
import validateRegisterForm from "../../utils/validateRegisterForm";
import { useContext } from "react";
import { UserContext } from "../../context/ProfileContext";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
}

const RegisterForm = () => {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRegister = (data) => {
    loginUser(data);
    navigate("/home");
  }

  const { errors, values, handleChange, handleSubmit } = useForm(initialValues, validateRegisterForm, handleRegister);

  return (
    <div className="form-layout">
      <User className="user-icon-form" />
      <form onSubmit={handleSubmit} className="auth-form">

        <div className="form-inputs-divs">
          <input type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Name"
            className="form-inputs" />
          {errors.name && <p className="input-errors">{errors.name}</p>}
        </div>

        <div className="form-inputs-divs">
          <input type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            placeholder="Lastname"
            className="form-inputs" />

          {errors.lastName && <p className="input-errors">{errors.lastName}</p>}
        </div>

        <div className="form-inputs-divs">
          <input type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            className="form-inputs" />

          {errors.email && <p className="input-errors">{errors.email}</p>}
        </div>

        <div className="form-inputs-divs">
          <input type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="*******"
            className="form-inputs" />

          {errors.password && <p className="input-errors">{errors.password}</p>}
        </div>

        <div className="form-inputs-divs">
          <input type="text"
            name="location"
            value={values.location}
            onChange={handleChange}
            placeholder="Location"
            className="form-inputs" />

          {errors.location && <p className="input-errors">{errors.location}</p>}
        </div>

        <button type="submit" className="form-buttons">Send</button>
      </form>

    </div>
  );
}

export default RegisterForm;