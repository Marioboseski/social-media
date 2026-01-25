import useForm from "../../hooks/useForm";
import validateRegisterForm from "../../utils/validateRegisterForm";

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
    <div>

      <form onSubmit={handleSubmit}>
        <input type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Name" />

        {errors.name && <p>{errors.name}</p>}

        <input type="text"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
        placeholder="Lastname" />

        {errors.lastName && <p>{errors.lastName}</p>}

        <input type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email" />

        {errors.email && <p>{errors.email}</p>}

        <input type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="*******" />

        {errors.password && <p>{errors.password}</p>}

        <input type="text"
        name="location"
        value={values.location}
        onChange={handleChange}
        placeholder="Location" />

        {errors.location && <p>{errors.location}</p>}

        <button type="submit">Send</button>
      </form>

    </div>
  );
}

export default RegisterForm;