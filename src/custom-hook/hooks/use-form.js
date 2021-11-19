import React from 'react';

export const useForm = initialState => {
  const [form, setForm] = React.useState(initialState);

  const handleChange = ({target: {value, name}}) => {
    setForm({...form, [name]: value});
  };

  return {form, handleChange};
};
