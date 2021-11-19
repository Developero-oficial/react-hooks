import React from 'react';

import {useForm} from '../hooks/use-form';

export const FormA = () => {
  const {form, handleChange} = useForm({
    address: '',
    postalCode: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(form));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        Address:
        <input
          name="address"
          type="text"
          value={form.address}
          onChange={handleChange}
        />
      </p>
      <p>
        Postal Code:
        <input
          name="postalCode"
          type="number"
          value={form.postalCode}
          onChange={handleChange}
        />
      </p>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
