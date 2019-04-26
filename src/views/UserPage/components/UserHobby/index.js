import React, { useState } from 'react';
import uuid from 'uuid';

const UserHobby = () => {
  const [hobbyText, updateHobbyText] = useState('');
  const [hobbies, updateHobbies] = useState([]);
  const deleteHobby = id => () => {
    updateHobbies(hobbies.filter(hobby => hobby.id !== id));
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (!hobbyText.trim()) return;
    updateHobbyText('');
    updateHobbies([...hobbies, { id: uuid(), text: hobbyText }]);
  };
  const handleChange = ({ target: { value } }) => {
    updateHobbyText(value);
  };
  const renderHobby = hobby => (
    <div key={hobby.id}>
      <p>{hobby.text}</p>
      <button type="button" onClick={deleteHobby(hobby.id)}>X</button>
    </div>
  );
  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="hobby">
        Your Hobby:
          <input
            id="hobby"
            value={hobbyText}
            name="hobby"
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Hobby</button>
      </form>
      { Boolean(hobbies.length) && (
        <div>
          <p>Your Hobby</p>
          {hobbies.map(renderHobby)}
        </div>
      )
      }
    </div>
  );
};

export default React.memo(UserHobby);
