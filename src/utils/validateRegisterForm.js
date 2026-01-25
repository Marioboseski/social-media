const validateRegisterForm = ( values ) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Enter your name";
  }
  if (!values.lastName.trim()) {
    errors.lastName = "Enter your username";
  }
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter valid email";
  }
  if(!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be atleast six characters";
  }
  if(!values.location.trim()) {
    errors.location = "Location required";
  }
  return errors;
}

export default validateRegisterForm;

