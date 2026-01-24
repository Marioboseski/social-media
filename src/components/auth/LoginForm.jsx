import useForm from "../../hooks/useForm";
import validateLoginForm from "../../utils/validateLoginForm";

const initialValues = {
  name: "",
  email: "",
  password: "",
}

const LoginForm = () => {
  const { errors, values, handleChange, handleSubmit } = useForm(initialValues, validateLoginForm)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Name" />

        {errors.name && <p>{errors.name}</p>}

        <input type="text"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email" />

        {errors.email && <p>{errors.email}</p>}

        <input type="text"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="*******" />

        {errors.password && <p>{errors.password}</p>}
      </form>
    </div>
  );
}

export default LoginForm