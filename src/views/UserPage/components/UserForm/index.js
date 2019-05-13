import React, { useState, useEffect, useRef } from 'react';

const UserForm = () => {
  const [form, updateForm] = useState({ name: '', lastName: '' });
  const nameInput = useRef(null)
  const updateField = ({ target: { name, value } }) => {
    updateForm({ ...form, [name]: value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    const { name, lastName } = form;
    alert(`Name: ${name}\nLast name: ${lastName}`);
  };
  useEffect(() => {
    console.log('Update Form First');
  }, [form.name]);
  useEffect(() => {
    console.log('Update Form Second');
  }, [form.lastName]);
  const focusToInput = () => {
    nameInput.current.focus();
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">
        Your name:
        <input
          id="name"
          ref={nameInput}
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
      <button type="button" onClick={focusToInput}>Focus</button>
    </form>
  );
};

export default React.memo(UserForm);
