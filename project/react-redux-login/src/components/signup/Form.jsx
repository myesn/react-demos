import React from 'react';
import { withRouter } from 'react-router-dom';

import Message from '../shared/alert/Message';

class Form extends React.Component {
  state = {
    form: {
      username: '',
      password: '',
      passwordConfirm: '',
    },
    actionState: {
      signup: {
        isCompleted: false,
        isLoading: false,
        error: null,
      },
      any: {
        isCompleted: false,
        isLoading: false,
        error: null,
      },
    },
  };

  onChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  onUserNameBlur = (e) => {
    const userName = e.target.value;
    if (!userName) return;

    const { any } = this.props.actions;
    const { username } = this.state.form;

    this.setState({
      actionState: {
        ...this.state.actionState,
        any: {
          error: null,
          isLoading: true,
          isCompleted: false,
        },
      },
    });

    any(username)
      .then((response) => {})
      .catch(({ response }) => {
        this.setState({
          actionState: {
            ...this.state.actionState,
            any: {
              isLoading: true,
              isCompleted: false,
              error: response ? response.data.error : '接口超时',
            },
          },
        });
      })
      .then(() => {
        this.setState({
          actionState: {
            ...this.state.actionState,
            any: {
              ...this.state.actionState.any,
              isLoading: false,
              isCompleted: true,
            },
          },
        });
      });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { history } = this.props;
    const { signup, addMessage } = this.props.actions;

    this.setState({
      actionState: {
        ...this.state.actionState,
        signup: {
          error: null,
          isLoading: true,
          isCompleted: false,
        },
      },
    });

    // 由于成功后会切换路由，切换路由会导致组件被卸载(unmount)，所以不能再操作状态更新
    // 如果设置的话，控制台就会报错，意思就是组件已被卸载，不能再操作状态更新
    signup(this.state.form)
      .then((response) => {
        addMessage({
          type: 'success',
          text: '注册成功，欢迎加入',
        });

        // 这里个人觉得应该让外部去实现，而不是在这里跳转，因为这里跳转还需要使用 route 的相关功能，
        // 会使当前组件变得臃肿
        history.replace('/');
      })
      .catch(({ response }) => {
        this.setState({
          actionState: {
            ...this.state.actionState,
            signup: {
              isLoading: false,
              isCompleted: true,
              error: response ? response.data.error : '接口超时',
            },
          },
        });
      })
      .then(() => {});
  };

  render() {
    const { form, actionState } = this.state;

    let anyErrorView = <></>;
    let signupCompletedView = <></>;
    let signupBtnText = 'Sign up';
    let signupBtnDisabled = false;

    if (actionState.signup.isCompleted) {
      signupCompletedView = (
        <Message
          type={actionState.signup.error ? 'error' : 'success'}
          text={
            actionState.signup.error
              ? actionState.signup.error
              : '注册成功，将在 1 秒后跳转到主页'
          }
        />
      );
    }

    if (actionState.signup.isLoading) {
      signupBtnText = 'Sign up ..';
      signupBtnDisabled = true;
    }

    if (actionState.any.error) {
      signupBtnDisabled = true;
      anyErrorView = <Message type='error' text={actionState.any.error} />;
    }

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>

        <div className='form-group'>
          <label htmlFor='username'>User name</label>
          <input
            className='form-control'
            type='text'
            name='username'
            value={form.username}
            onChange={this.onChange}
            onBlur={this.onUserNameBlur}
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
        <div className='form-group'>
          <label htmlFor='passwordConfirm'>Password Confirm</label>
          <input
            className='form-control'
            type='password'
            name='passwordConfirm'
            value={form.passwordConfirm}
            onChange={this.onChange}
          />
        </div>
        {anyErrorView}
        {signupCompletedView}
        <button
          type='submit'
          className='btn btn-primary'
          disabled={signupBtnDisabled}>
          {signupBtnText}
        </button>
      </form>
    );
  }
}

export default withRouter(Form);
