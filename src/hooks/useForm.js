import { useState } from "react";

export const useForm = (form = {}) => {
  const [formState, setFormState] = useState(form);

  const onInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onReset = (event) => {
    event.preventDefault();
    setFormState(form);
  };

  return {
    formState,
    onInputChange,
    onReset,
  };
};
