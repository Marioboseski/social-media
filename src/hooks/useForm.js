import { useState } from "react";

const useForm = (initialValues, validate) => {
  const [ values, setValues ] = useState(initialValues);
  const [ errors, setErrors ] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValues = {...values, [ name ] : value}
    setErrors(validate(newValues));
    setValues(newValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate(values);
    setErrors(validateErrors);

    if(Object.keys(validateErrors).length === 0) {
      setValues(initialValues);
    }
  };

  return { errors, values, handleChange, handleSubmit }
}

export default useForm;