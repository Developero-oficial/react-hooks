import React from 'react';

export const Form = () => {
  const [form, setForm] = React.useState({
    name: '',
    age: '',
  });

  const handleChange = ({target: {value, name}}) => {
    setForm({...form, [name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(form));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        Name:
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />
      </p>
      <p>
        age:
        <input
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
        />
      </p>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
