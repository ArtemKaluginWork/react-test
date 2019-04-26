import React, { useState } from 'react';

const UserForm = () => {
  const [form, updateForm] = useState({ name: '', lastName: '' });
  const updateField = ({ target: { name, value } }) => {
    updateForm({ ...form, [name]: value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    const { name, lastName } = form;
    alert(`Name: ${name}\nLast name: ${lastName}`);
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">
        Your name:
        <input
          id="name"
          value={form.name}
          name="name"
          onChange={updateField}
        />
      </label>
      <br />
      <label htmlFor="lastName">
        Your last name
        <input
          id="lastName"
          value={form.lastName}
          name="lastName"
          onChange={updateField}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default React.memo(UserForm);
