import React from 'react';
import uuid from 'uuid';
import { Hobby } from '../../views/UserPage/components/UserHobby';

export default class UserHobby extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hobbyText: '',
      hobbies: [],
    };
  }

  deleteHobby = id => () => {
    const { hobbies } = this.state;
    this.setState({ hobbies: hobbies.filter(({ id: hId }) => hId !== id) });
  }

  submitForm = (e) => {
    e.preventDefault();
    const { hobbies, hobbyText } = this.state;
    if (!hobbyText.trim()) return;
    this.setState({ hobbies: [...hobbies, { id: uuid(), text: hobbyText }], hobbyText: '' });
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ hobbyText: value });
  };

  renderHobby = hobby => (
    <Hobby key={hobby.id} hobby={hobby} deleteHobby={this.deleteHobby} />
  );

  render() {
    const { hobbies, hobbyText } = this.state;
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label htmlFor="hobby">
            Your Hobby:
            <input
              id="hobby"
              value={hobbyText}
              name="hobby"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Add Hobby</button>
        </form>
        { Boolean(hobbies.length) && (
          <div>
            <p>Your Hobby</p>
            {hobbies.map(this.renderHobby)}
          </div>
        )
        }
      </div>
    );
  }
}
