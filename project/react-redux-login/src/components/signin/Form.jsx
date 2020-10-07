import React from 'react';
import { withRouter } from 'react-router-dom';

import Message from '../shared/alert/Message';

class Form extends React.Component {
  state = {
    form: {
      username: '',
      password: '',
    },
    isLoading: false,
    isCompleted: false,
    error: null,
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { form } = this.state;
    const { signin, addMessage, setLoggedInUser } = this.props.actions;
    const { history } = this.props;

    this.setState({
      isLoading: true,
      isCompleted: false,
      error: null,
    });

    signin(form)
      .then((response) => {
        addMessage({
          type: 'success',
          text: '登陆成功',
        });

        setLoggedInUser(response.data.token);

        history.replace('/');
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          isCompleted: true,
          error: response ? response.data.error : '接口超时',
        });
      })
      .then(() => {});
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  };

  render() {
    const { form, isLoading, isCompleted, error } = this.state;

    let completedView;
    if (isCompleted) {
      completedView = (
        <Message
          type={error ? 'error' : 'success'}
          text={error ? error : '登录成功'}
        />
      );
    }

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign in</h1>

        <div className='form-group'>
          <label htmlFor='username'>User name</label>
          <input
            className='form-control'
            type='text'
            name='username'
            value={form.username}
            onChange={this.onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            className='form-control'
            type='password'
            name='password'
            value={form.password}
            onChange={this.onChange}
          />
        </div>
        {completedView}
        <button type='submit' className='btn btn-primary' disabled={isLoading}>
          {isLoading ? 'Sign in..' : 'Sign in'}
        </button>
      </form>
    );
  }
}

export default withRouter(Form);
