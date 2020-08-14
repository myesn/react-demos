import React from 'react';

export default class KeyDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: 'myesn',
          age: 22,
          sex: 'male',
          jobs: [1, 2, 3],
        },
        {
          name: 'kid',
          age: 11,
          sex: 'female',
          jobs: [1, 2, 3],
        },
      ],
    };
  }

  handleAddUserClick = () => {
    this.setState((state) => ({
      users: state.users.concat([
        {
          name: 'kid2',
          age: 11,
          sex: 'female',
          jobs: [1, 2, 3],
        },
      ]),
    }));
  };
  render() {
    let userView = this.state.users.map((user, index) => {
      return (
        <li key={index}>
          <span>{user.name}</span>
          <span>{user.age}</span>
          <span>{user.sex}</span>
          <div>
            {user.jobs.map((job, jobIndex) => {
              return <span key={jobIndex}>{job}</span>;
            })}
          </div>
        </li>
      );
    });

    return (
      <div>
        <ul>{userView}</ul>
        <button onClick={this.handleAddUserClick}>add user</button>
      </div>
    );
  }
}
