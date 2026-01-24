const validateLoginForm = ( values ) => {
  const errors = {};

  if(!values.name.trim()) {
    errors.name = "Name required";
  }

  if(!values.email) {
    errors.email = "Email required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter valid email";
  }

  if(!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be atleast six characters";
  }
  return errors;

}

export default validateLoginForm;