export const validateField = (field, inputValue) => {
  const errors = [];
  const { required, pattern, errorMessage } = field;

  if (required) {
    if (inputValue.length === 0) errors.push(`Pole jest wymagane.`);
  }

  if (required && inputValue === false) {
    errors.push(errorMessage);
  }

  if (inputValue.length > 0 && pattern) {
    const reg = new RegExp(pattern);
    if (!reg.test(inputValue)) errors.push(errorMessage);
  }

  return errors;
};

export const validateFields = (fields, inputValues) => {
  const errors = {};

  fields.forEach((field) => {
    const inputValue = inputValues[field.name];
    const fieldErrors = validateField(field, inputValue);

    errors[field.name] = fieldErrors;
  });

  return errors;
};
