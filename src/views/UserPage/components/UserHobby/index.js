import React, { useState, memo, useCallback } from 'react';
import uuid from 'uuid';

export const Hobby = memo(({ hobby, deleteHobby }) => (
  <div key={hobby.id}>
    <p>{hobby.text}</p>
    <button type="button" onClick={deleteHobby(hobby.id)}>X</button>
  </div>
), (p, n) => p.deleteHobby === n.deleteHobby);


const UserHobby = () => {
  const [hobbyText, updateHobbyText] = useState('');
  const [hobbies, updateHobbies] = useState([]);

  const deleteHobby = useCallback(id => () => {
    updateHobbies(hobbies => hobbies.filter(({ id: hId }) => hId !== id));
  }, []);

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
    <Hobby key={hobby.id} hobby={hobby} deleteHobby={deleteHobby} />
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
