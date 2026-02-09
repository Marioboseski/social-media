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
  }  else if (!/[A-Z]/.test(values.password) || (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password))) {
    errors.password = "Pasword must contain atleast one upper case and one special character"
  }
  return errors;

}

export default validateLoginForm;